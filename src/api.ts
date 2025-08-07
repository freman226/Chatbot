

const API_BASE = import.meta.env.VITE_DOMINIO_BACKEND;

export interface MessagePayload {
  sessionId: string;
  message: string;
}

export interface ContextPayload {
  sessionId: string;
  context: string;
}

export const sendMessage = async (payload: MessagePayload) => {
  const res = await fetch(`${API_BASE}/message`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const sendContext = async (payload: ContextPayload) => {
  const res = await fetch(`${API_BASE}/context`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
};
