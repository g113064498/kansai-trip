/* Two-person ledger. Existing trip/souvenir data is never rewritten here.
 * Each expense, repayment or void is an immutable, private HexSchool Article.
 * Independent appends avoid last-writer-wins overwrites of a shared array.
 */
(function (root) {
    'use strict';
    const TAG = 'split-ledger-v1';
    const HOTEL_URL = 'https://www.booking.com/hotel/jp/color-tsuruhashi-da-ban-fu1.zh-tw.html';
    const PEOPLE = { me: '我', girl: '女友' };
    const CURRENCIES = ['JPY', 'TWD'];
    const hasPerson = p => p === 'me' || p === 'girl';
    const clone = value => JSON.parse(JSON.stringify(value));

    function parseMoney(value, currency, allowZero = false) {
        if (!CURRENCIES.includes(currency)) throw new Error('請選擇日圓或台幣');
        const text = String(value).trim();
        const pattern = currency === 'JPY' ? /^\d+$/ : /^\d+(\.\d{1,2})?$/;
        if (!pattern.test(text)) throw new Error(currency === 'JPY' ? '日圓請輸入整數' : '台幣最多兩位小數');
        const [whole, fraction = ''] = text.split('.');
        const n = currency === 'JPY' ? Number(whole) : Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
        if (!Number.isSafeInteger(n) || n > 100000000000 || n < (allowZero ? 0 : 1)) throw new Error('金額須大於 0，且不可超出可記錄範圍');
        return n;
    }
    function money(n, currency) {
        return (currency === 'JPY' ? '¥ ' : 'NT$ ') + (n / (currency === 'TWD' ? 100 : 1)).toLocaleString('zh-TW', { maximumFractionDigits: currency === 'JPY' ? 0 : 2 });
    }
    function inputMoney(n, currency) { return String(n / (currency === 'TWD' ? 100 : 1)); }
    function shares(amount, payer, mode, custom) {
        if (!Number.isSafeInteger(amount) || amount <= 0 || !hasPerson(payer)) throw new Error('付款資料不正確');
        let me;
        if (mode === 'equal') me = Math.floor(amount / 2) + (payer === 'me' ? amount % 2 : 0);
        else if (mode === 'me') me = amount;
        else if (mode === 'girl') me = 0;
        else if (mode === 'custom') me = custom;
        else throw new Error('請選擇分攤方式');
        if (!Number.isSafeInteger(me) || me < 0 || me > amount) throw new Error('我的負擔須介於 0 與總金額之間');
        return { me, girl: amount - me };
    }
    function validDate(text) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(text || '')) return false;
        const date = new Date(text + 'T00:00:00Z');
        return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === text;
    }
    function validate(event) {
        if (!event || event.schema !== 1 || !/^[\w-]{8,100}$/.test(event.id || '') || !validDate(event.date)) throw new Error('分帳紀錄格式錯誤，已停止計算以免漏帳');
        if (event.kind === 'void') {
            if (!/^[\w-]{8,100}$/.test(event.target || '') || event.target === event.id) throw new Error('作廢目標不正確');
            return event;
        }
        if (!['expense', 'settlement'].includes(event.kind) || !CURRENCIES.includes(event.currency) || !hasPerson(event.payer)) throw new Error('分帳類型、幣別或付款人不正確');
        if (!Number.isSafeInteger(event.amount) || event.amount <= 0 || event.amount > 100000000000) throw new Error('分帳金額不正確');
        if (typeof event.title !== 'string' || !event.title.trim() || event.title.length > 160 || typeof event.note !== 'string' || event.note.length > 2000) throw new Error('分帳項目或備註不正確');
        if (event.kind === 'expense') {
            const s = event.shares;
            if (!s || !Number.isSafeInteger(s.me) || !Number.isSafeInteger(s.girl) || s.me < 0 || s.girl < 0 || s.me + s.girl !== event.amount) throw new Error('兩人的負擔合計必須等於付款總額');
        }
        return event;
    }
    function canonical(value) {
        if (Array.isArray(value)) return '[' + value.map(canonical).join(',') + ']';
        if (value && typeof value === 'object') return '{' + Object.keys(value).sort().map(k => JSON.stringify(k) + ':' + canonical(value[k])).join(',') + '}';
        return JSON.stringify(value);
    }
    function calculate(events) {
        const byId = new Map();
        events.forEach(event => {
            validate(event);
            const prev = byId.get(event.id);
            if (prev && canonical(prev) !== canonical(event)) throw new Error('同一筆分帳有不同內容，請先核對備份，不會自動覆蓋');
            byId.set(event.id, event);
        });
        const voided = new Set();
        byId.forEach(event => {
            if (event.kind !== 'void') return;
            const target = byId.get(event.target);
            if (!target || target.kind === 'void') throw new Error('作廢紀錄缺少原始帳目，請重新同步');
            voided.add(event.target);
        });
        const totals = {};
        CURRENCIES.forEach(c => { totals[c] = { expense: 0, paidMe: 0, paidGirl: 0, shareMe: 0, shareGirl: 0, balance: 0 }; });
        const rows = [...byId.values()].filter(e => e.kind !== 'void').sort((a, b) => (b.date + (b.createdAt || '') + b.id).localeCompare(a.date + (a.createdAt || '') + a.id));
        rows.forEach(e => {
            if (voided.has(e.id)) return;
            const t = totals[e.currency];
            if (e.kind === 'expense') {
                t.expense += e.amount;
                t[e.payer === 'me' ? 'paidMe' : 'paidGirl'] += e.amount;
                t.shareMe += e.shares.me;
                t.shareGirl += e.shares.girl;
                t.balance += e.payer === 'me' ? e.shares.girl : -e.shares.me;
            } else {
                // Positive balance: girlfriend owes me. Repayment is not a new expense.
                t.balance += e.payer === 'me' ? e.amount : -e.amount;
            }
            if (Object.values(t).some(v => !Number.isSafeInteger(v))) throw new Error('合計金額過大');
        });
        return { totals, rows, voided, events: [...byId.values()] };
    }
    function debtText(balance, currency) {
        return balance > 0 ? '女友還我 ' + money(balance, currency) : balance < 0 ? '我還女友 ' + money(-balance, currency) : '目前互不相欠';
    }
    function hotelLink(hotel, currentUrl) {
        const raw = String(hotel.link || '').trim();
        try {
            const url = new URL(raw);
            const current = new URL(currentUrl || 'https://example.invalid/');
            if (['https:', 'http:'].includes(url.protocol) && !url.username && !url.password && !(url.origin === current.origin && url.pathname === current.pathname)) return url.href;
        } catch (_) { /* Empty/relative URLs must not reopen this page. */ }
        return /^cu\s+tennoji$/i.test(String(hotel.name || '').trim()) ? HOTEL_URL : '';
    }
    async function allArticles(api, base, path) {
        let page = 1;
        const seen = new Set(), articles = [];
        for (;;) {
            if (page > 500) throw new Error('文章分頁超出範圍，請檢查資料庫');
            const data = await api.request('GET', `${base}/api/${path}/admin/articles?page=${page}`);
            if (!Array.isArray(data.articles)) throw new Error('文章列表回應不完整');
            let added = 0;
            for (const a of data.articles) {
                if (!a || !a.id) throw new Error('文章列表缺少識別碼');
                if (!seen.has(a.id)) { seen.add(a.id); articles.push(a); added++; }
            }
            const pagination = data.pagination || {};
            const more = pagination.has_next === true || Number(pagination.total_pages || 1) > page;
            if (!more) return articles;
            if (!added) throw new Error('文章分頁重複，已停止讀取，避免漏帳');
            page++;
        }
    }
    const core = { TAG, parseMoney, money, shares, validate, calculate, debtText, hotelLink, allArticles };
    if (typeof module !== 'undefined' && module.exports) module.exports = core;
    if (typeof document === 'undefined') return;

    // Loaded after app.js, before DOMContentLoaded. No changes to db or its save functions.
    const originalDashboard = renderDashboard;
    renderDashboard = function (...args) {
        const result = originalDashboard.apply(this, args);
        document.querySelectorAll('#hotels-container .hotel-item').forEach((card, index) => {
            const hotel = (db && db.hotels || [])[index];
            const link = card.querySelector('a.btn-link');
            if (!hotel || !link) return;
            const href = hotelLink(hotel, root.location.href);
            if (!href) {
                link.removeAttribute('href'); link.hidden = true;
            } else {
                link.href = href; link.hidden = false; link.rel = 'noopener noreferrer';
                if (href === HOTEL_URL) link.textContent = '在 Booking.com 查看 Cu Tennoji 住宿頁面 ↗';
            }
        });
        return result;
    };
    // Ledger entries add private Articles. Paginate the shared reader so master/checklists
    // remain discoverable even after the ledger has pushed them beyond the first page.
    hexAPI.getArticles = function () { return allArticles(this, API_BASE, API_PATH); };

    const state = { events: [], pending: [], busy: false, ready: false, account: '', status: '開啟分帳後讀取資料', showVoided: false };
    const $ = id => document.getElementById(id);
    const escape = s => String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    function dateKey() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }
    function uid() {
        if (!root.crypto || !root.crypto.getRandomValues) throw new Error('瀏覽器不支援安全識別碼');
        const bytes = new Uint8Array(16); root.crypto.getRandomValues(bytes);
        return 'split-' + [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
    }
    function storageKey(suffix) { return `kansai_split_v1:${encodeURIComponent(state.account)}:${suffix}`; }
    function getAccount() {
        return getToken() ? (localStorage.getItem('kansai_trip_user_email') || '') : '';
    }
    function readPending() {
        const prefix = storageKey('pending:');
        const result = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) { const e = JSON.parse(localStorage.getItem(key)); validate(e); result.push(e); }
        }
        return result;
    }
    function switchAccount() {
        const account = getAccount();
        if (state.account === account) return;
        state.account = account; state.ready = false; state.events = []; state.pending = [];
        if (!account) return;
        try {
            const saved = JSON.parse(localStorage.getItem(storageKey('cache')) || '[]');
            state.events = calculate(saved).events;
            state.pending = readPending();
            state.status = '本機快取；請同步確認最新結算';
        } catch (_) { state.status = '快取無法讀取，請重新同步'; }
    }
    async function readRemote() {
        if (!getToken() || !state.account || state.account !== getAccount()) throw new Error('請先登入後再同步分帳');
        const account = state.account;
        const articles = (await hexAPI.getArticles()).filter(a => Array.isArray(a.tag) && a.tag.includes(TAG));
        const events = [];
        // Small batches avoid launching dozens of requests at once.
        for (let i = 0; i < articles.length; i += 4) {
            const batch = await Promise.all(articles.slice(i, i + 4).map(async a => {
                const full = typeof a.content === 'string' && a.content ? a : await hexAPI.getArticle(a.id);
                if (!full || !full.content) throw new Error('分帳資料讀取不完整');
                return validate(JSON.parse(full.content));
            }));
            events.push(...batch);
        }
        if (getAccount() !== account) throw new Error('登入帳號已變更，請重新同步');
        const result = calculate(events);
        state.events = result.events; state.ready = true;
        try { localStorage.setItem(storageKey('cache'), JSON.stringify(state.events)); } catch (_) { /* Cloud read remains valid. */ }
        state.pending = readPending();
        state.status = '已讀取最新分帳 · ' + new Date().toLocaleTimeString('zh-TW');
        return result;
    }
    async function refresh() {
        if (state.busy) return;
        switchAccount();
        if (!state.account) { state.status = '請先登入，分帳沿用原有同步帳號'; render(); return; }
        state.busy = true; state.status = '正在讀取分帳…'; render();
        try { await readRemote(); }
        catch (e) { state.ready = false; state.status = '同步失敗：' + e.message; }
        finally { state.busy = false; render(); }
    }
    function recordFromForm() {
        const currency = $('split-currency').value;
        const kind = $('split-kind').value;
        const payer = $('split-payer').value;
        const amount = parseMoney($('split-amount').value, currency);
        const event = { schema: 1, id: uid(), kind, date: $('split-date').value, createdAt: new Date().toISOString(), currency, amount, payer, title: kind === 'settlement' ? '還款' : $('split-title').value.trim(), note: $('split-note').value.trim() };
        if (kind === 'expense') {
            event.mode = $('split-mode').value;
            event.shares = shares(amount, payer, event.mode, event.mode === 'custom' ? parseMoney($('split-custom').value, currency, true) : undefined);
        }
        return validate(event);
    }
    function preview() {
        const settlement = $('split-kind').value === 'settlement';
        $('split-expense-fields').hidden = settlement;
        $('split-title-wrap').hidden = settlement;
        $('split-title').required = !settlement;
        $('split-payer-label').textContent = settlement ? '誰已實際還款給對方' : '誰先付款';
        $('split-custom-wrap').hidden = $('split-mode').value !== 'custom';
        $('split-amount').step = $('split-currency').value === 'JPY' ? '1' : '0.01';
        $('split-amount').min = $('split-amount').step;
        $('split-custom').disabled = settlement || $('split-mode').value !== 'custom';
        $('split-custom').required = !settlement && $('split-mode').value === 'custom';
        $('split-custom').step = $('split-amount').step;
        const out = $('split-preview');
        try {
            const currency = $('split-currency').value;
            const amount = parseMoney($('split-amount').value, currency);
            if (settlement) out.textContent = PEOPLE[$('split-payer').value] + '還給' + PEOPLE[$('split-payer').value === 'me' ? 'girl' : 'me'] + ' ' + money(amount, currency) + '；只登記，不會實際轉帳。';
            else {
                const split = shares(amount, $('split-payer').value, $('split-mode').value, $('split-mode').value === 'custom' ? parseMoney($('split-custom').value, currency, true) : undefined);
                out.textContent = '我的負擔 ' + money(split.me, currency) + '／女友負擔 ' + money(split.girl, currency) + '。均分有尾差時，由付款人多負擔最小貨幣單位。';
            }
        } catch (e) { out.textContent = $('split-amount').value ? e.message : '填入這筆實際付款總額，不是單人預算。'; }
    }
    function checkNewEvent(event, result) {
        if (event.kind === 'void') {
            const target = result.rows.find(e => e.id === event.target);
            if (!target) throw new Error('找不到要作廢的帳目');
        }
        if (event.kind === 'settlement') {
            const balance = result.totals[event.currency].balance;
            const due = event.payer === 'girl' ? balance : -balance;
            if (due <= 0 || event.amount > due) throw new Error('還款方向或金額超過目前欠款；請依最新餘額核對');
        }
    }
    async function append(event) {
        if (state.busy) return false;
        switchAccount();
        if (!state.account) { ensureLogin(); state.status = '請先登入再記帳'; render(); return false; }
        state.busy = true; state.status = '正在確認並儲存…'; render();
        let journaled = false;
        try {
            const result = await readRemote();
            const existing = result.events.find(e => e.id === event.id);
            if (existing && canonical(existing) !== canonical(event)) throw new Error('識別碼衝突，請保留待確認紀錄');
            if (!existing) {
                checkNewEvent(event, result);
                // Persist an idempotency key before POST. Retry never gets a new ID.
                localStorage.setItem(storageKey('pending:' + event.id), JSON.stringify(event));
                journaled = true;
                await hexAPI.createArticle({ title: '[分帳] ' + event.id, content: JSON.stringify(event), tag: [TAG], isPublic: false, create_at: Math.floor(Date.now() / 1000), author: 'trip-ledger' });
                const checked = await readRemote();
                const stored = checked.events.find(e => e.id === event.id);
                if (!stored || canonical(stored) !== canonical(event)) throw new Error('尚未讀回剛送出的紀錄');
            }
            localStorage.removeItem(storageKey('pending:' + event.id));
            state.pending = readPending();
            state.status = '已儲存並讀回確認';
            return true;
        } catch (e) {
            state.ready = false;
            try { state.pending = readPending(); } catch (_) { /* Show original failure. */ }
            state.status = (journaled || state.pending.some(p => p.id === event.id) ? '送出結果待確認，請用「確認／重試」，不要重記：' : '未儲存：') + e.message;
            return false;
        } finally { state.busy = false; render(); }
    }
    async function submit(event) {
        event.preventDefault();
        if (state.busy || state.pending.length) return;
        try {
            const row = recordFromForm();
            if (row.kind === 'settlement' && !root.confirm('確認這筆款項已實際交給對方？這裡只登記還款，不會進行轉帳。')) return;
            if (await append(row)) {
                $('split-form').reset(); $('split-date').value = dateKey(); preview();
            }
        } catch (e) { $('split-form-error').textContent = e.message; }
    }
    async function voidRow(id) {
        if (state.busy || !state.ready || state.pending.length) return;
        const target = state.events.find(e => e.id === id);
        if (!target || !root.confirm('作廢「' + target.title + '」？原始紀錄會保留，結算將排除這筆。填錯可作廢後重記。')) return;
        await append({ schema: 1, id: uid(), kind: 'void', target: id, date: dateKey(), createdAt: new Date().toISOString() });
    }
    function setSettlement(currency) {
        const balance = calculate(state.events).totals[currency].balance;
        if (!balance || !state.ready) return;
        $('split-kind').value = 'settlement'; $('split-currency').value = currency;
        $('split-payer').value = balance > 0 ? 'girl' : 'me'; $('split-amount').value = inputMoney(Math.abs(balance), currency);
        $('split-date').value = dateKey(); preview(); $('split-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    async function copySummary() {
        if (!state.ready) return;
        const result = calculate(state.events);
        const lines = ['雙人分帳（台幣／日圓分開結算）'];
        CURRENCIES.forEach(c => { const t = result.totals[c]; lines.push(c + '：' + debtText(t.balance, c), '  支出 ' + money(t.expense, c) + '；我的負擔 ' + money(t.shareMe, c) + '；女友負擔 ' + money(t.shareGirl, c)); });
        try { await navigator.clipboard.writeText(lines.join('\n')); state.status = '結算摘要已複製'; }
        catch (_) { root.prompt('請複製以下結算摘要', lines.join('\n')); }
        render();
    }
    function exportLedger() {
        if (!state.account) return;
        const blob = new Blob([JSON.stringify({ format: 'kansai-split-ledger-v1', exportedAt: new Date().toISOString(), records: state.events, pending: state.pending }, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob), link = document.createElement('a');
        link.href = url; link.download = 'kansai-split-' + dateKey() + '.json'; document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
    function render() {
        if (!$('split-ledger')) return;
        $('split-status').textContent = state.status;
        $('split-status').classList.toggle('split-stale', !state.ready);
        $('split-save').disabled = state.busy || !state.account || state.pending.length > 0;
        $('split-refresh').disabled = state.busy;
        $('split-copy').disabled = state.busy || !state.ready;
        $('split-export').disabled = !state.account || state.busy;
        $('split-form-fields').disabled = state.busy || state.pending.length > 0;
        const result = calculate(state.events);
        $('split-balances').innerHTML = CURRENCIES.map(c => {
            const t = result.totals[c];
            return `<article class="split-balance"><h3>${c === 'JPY' ? '日圓 JPY' : '台幣 TWD'}</h3><strong class="split-debt">${escape(state.account && (state.ready || state.events.length) ? debtText(t.balance, c) : '尚未同步')}</strong><p>已記支出 ${money(t.expense, c)}</p><dl><div><dt>我先付／我負擔</dt><dd>${money(t.paidMe, c)} ／ ${money(t.shareMe, c)}</dd></div><div><dt>女友先付／女友負擔</dt><dd>${money(t.paidGirl, c)} ／ ${money(t.shareGirl, c)}</dd></div></dl><button type="button" class="btn btn-outline" data-settle="${c}" ${!state.ready || !t.balance || state.busy || state.pending.length ? 'disabled' : ''}>登記已還款</button></article>`;
        }).join('');
        const rows = result.rows.filter(e => state.showVoided || !result.voided.has(e.id));
        $('split-entries').innerHTML = rows.length ? rows.map(e => `<article class="split-entry ${result.voided.has(e.id) ? 'split-voided' : ''}"><div class="split-entry-top"><div><small>${escape(e.date)} · ${e.kind === 'expense' ? '支出' : '還款'}${result.voided.has(e.id) ? ' · 已作廢' : ''}</small><h4>${escape(e.title)}</h4></div><strong>${money(e.amount, e.currency)}</strong></div><p>${PEOPLE[e.payer]}${e.kind === 'expense' ? '先付款；我負擔 ' + money(e.shares.me, e.currency) + '／女友負擔 ' + money(e.shares.girl, e.currency) : '已還給' + PEOPLE[e.payer === 'me' ? 'girl' : 'me']}</p>${e.note ? `<p class="split-note">${escape(e.note)}</p>` : ''}${!result.voided.has(e.id) ? `<button type="button" class="quick-copy-btn" data-void="${e.id}" ${!state.ready || state.busy || state.pending.length ? 'disabled' : ''}>作廢</button>` : ''}</article>`).join('') : '<p class="split-empty">尚無分帳紀錄。請填實際付款總額；不會自動匯入預算、伴手禮或訂單。</p>';
        $('split-pending').hidden = !state.pending.length;
        $('split-pending').innerHTML = state.pending.length ? '<h3>有待確認的送出紀錄</h3><p>請先確認／重試同一筆，避免重複記帳。重試沿用相同識別碼。</p>' + state.pending.map(e => `<div><span>${escape(e.title || '作廢紀錄')} ${e.amount ? money(e.amount, e.currency) : ''}</span><button type="button" class="btn btn-outline" data-retry="${e.id}" ${state.busy ? 'disabled' : ''}>確認／重試</button></div>`).join('') : '';
    }
    function mount() {
        if ($('split-ledger')) return;
        const section = document.createElement('section'); section.id = 'split-ledger'; section.className = 'content-section';
        section.innerHTML = `<div class="card split-heading"><div><div class="travel-panel-label">雙人旅行記帳</div><h2>分帳與結算</h2><p>實際支出獨立記錄，不會加回原本的預算。日圓與台幣分開結算。</p></div><div class="split-actions"><button id="split-refresh" type="button" class="btn btn-outline">同步最新</button><button id="split-copy" type="button" class="btn btn-outline">複製結算</button><button id="split-export" type="button" class="btn btn-outline">備份分帳 JSON</button></div><p id="split-status" role="status" aria-live="polite"></p></div><div id="split-pending" class="card" hidden></div><div id="split-balances"></div><div class="split-layout"><div class="card"><h3>新增紀錄</h3><form id="split-form"><fieldset id="split-form-fields"><div class="split-form-grid"><label>類型<select id="split-kind" class="form-control"><option value="expense">實際支出</option><option value="settlement">已實際還款</option></select></label><label>日期<input id="split-date" type="date" class="form-control" required></label><label id="split-title-wrap" class="split-full">項目名稱<input id="split-title" class="form-control" maxlength="160" placeholder="例如：晚餐、交通、代買伴手禮" required></label><label>幣別<select id="split-currency" class="form-control"><option value="JPY">日圓 JPY</option><option value="TWD">台幣 TWD</option></select></label><label>這筆付款總額<input id="split-amount" type="number" min="0.01" step="1" inputmode="decimal" class="form-control" required placeholder="請填總額"></label><label class="split-full"><span id="split-payer-label">誰先付款</span><select id="split-payer" class="form-control"><option value="me">我</option><option value="girl">女友</option></select></label></div><div id="split-expense-fields" class="split-form-grid"><label>分攤方式<select id="split-mode" class="form-control"><option value="equal">兩人均分</option><option value="me">全部由我負擔</option><option value="girl">全部由女友負擔</option><option value="custom">自訂金額</option></select></label><label id="split-custom-wrap" hidden>我的負擔金額<input id="split-custom" class="form-control" type="number" min="0" step="1" inputmode="decimal" placeholder="其餘由女友負擔"></label></div><label>備註<textarea id="split-note" class="form-control" rows="2" maxlength="2000" placeholder="只填記帳需要的內容，不要填卡號或訂單密碼"></textarea></label><output id="split-preview" aria-live="polite"></output><p id="split-form-error" role="alert"></p><button id="split-save" class="btn btn-primary" type="submit">儲存並同步</button></fieldset></form></div><div class="card"><div class="split-history-heading"><h3>分帳明細</h3><label><input type="checkbox" id="split-show-voided"> 顯示作廢紀錄</label></div><p class="split-help">填錯可作廢後重記，原紀錄保留。還款只沖抵欠款，不算第二次支出。此分帳帳本請使用上方專用 JSON 備份。</p><div id="split-entries"></div></div></div>`;
        document.querySelector('main.container').appendChild(section);
        const svg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h3M15 14h2"/></svg>';
        const desktop = document.createElement('button'); desktop.type = 'button'; desktop.className = 'nav-btn'; desktop.dataset.tab = 'split-ledger'; desktop.innerHTML = svg + '分帳'; desktop.addEventListener('click', () => switchTab('split-ledger'));
        document.querySelector('.main-nav').appendChild(desktop);
        const mobile = document.createElement('button'); mobile.type = 'button'; mobile.className = 'mobile-nav-btn'; mobile.id = 'mob-nav-split-ledger'; mobile.innerHTML = svg + '分帳'; mobile.addEventListener('click', () => switchTab('split-ledger'));
        document.querySelector('.mobile-bottom-nav').appendChild(mobile);
        $('split-date').value = dateKey();
        $('split-form').addEventListener('submit', submit);
        $('split-form').addEventListener('input', () => { $('split-form-error').textContent = ''; preview(); });
        $('split-form').addEventListener('change', preview);
        $('split-refresh').addEventListener('click', refresh);
        $('split-copy').addEventListener('click', copySummary);
        $('split-export').addEventListener('click', exportLedger);
        $('split-show-voided').addEventListener('change', e => { state.showVoided = e.target.checked; render(); });
        section.addEventListener('click', e => {
            const b = e.target.closest('button'); if (!b) return;
            if (b.dataset.settle) setSettlement(b.dataset.settle);
            if (b.dataset.void) voidRow(b.dataset.void);
            if (b.dataset.retry) { const pending = state.pending.find(p => p.id === b.dataset.retry); if (pending) append(pending).then(ok => { if (ok) { $('split-form').reset(); $('split-date').value = dateKey(); preview(); } }); }
        });
        switchAccount(); preview(); render();
    }
    const originalSwitch = switchTab;
    switchTab = function (id) { const result = originalSwitch(id); if (id === 'split-ledger') refresh(); return result; };
    document.addEventListener('DOMContentLoaded', mount, { once: true });
})(typeof window === 'undefined' ? globalThis : window);
