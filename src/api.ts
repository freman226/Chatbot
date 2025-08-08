// src/api.ts
const API_BASE = (import.meta.env.VITE_DOMINIO_BACKEND || '').replace(/\/$/, '');
// Ejemplo .env: VITE_DOMINIO_BACKEND=http://localhost:3000/api

export interface SendMessageBody {
  message: string;
}

export interface BackendOk {
  success: true;
}
export interface BackendErr {
  success: false;
  error: string;
}
export type BackendEnvelope = BackendOk | BackendErr;

export async function sendMessage(body: SendMessageBody, signal?: AbortSignal): Promise<{ response: string }> {
  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<{ response: string }>;
}
