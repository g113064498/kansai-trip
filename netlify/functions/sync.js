// Netlify Function: 同步待辦勾選狀態 + 留言板
// GET  → 讀取最新狀態
// POST → 寫入最新狀態（整個覆蓋，最後寫入者獲勝）
import { getStore } from '@netlify/blobs';

const STORE_NAME = 'trip-sync';
const STATE_KEY = 'state.json';

const jsonResponse = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
  });

const defaultState = () => ({
  checklist: {},
  messages: [],
  updatedAt: null,
});

export default async (request) => {
  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response('', {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
    });
  }

  const store = getStore(STORE_NAME);

  if (request.method === 'GET') {
    try {
      const data = (await store.get(STATE_KEY, { type: 'json' })) || defaultState();
      return jsonResponse(200, data);
    } catch (err) {
      return jsonResponse(500, { error: 'read_failed', message: String(err) });
    }
  }

  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const next = {
        checklist: body.checklist && typeof body.checklist === 'object' ? body.checklist : {},
        messages: Array.isArray(body.messages) ? body.messages : [],
        updatedAt: new Date().toISOString(),
      };
      await store.setJSON(STATE_KEY, next);
      return jsonResponse(200, { ok: true, updatedAt: next.updatedAt });
    } catch (err) {
      return jsonResponse(500, { error: 'write_failed', message: String(err) });
    }
  }

  return jsonResponse(405, { error: 'method_not_allowed' });
}

