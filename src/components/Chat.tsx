// src/components/Chat.tsx
import React, { useState } from 'react';
import { sendMessage } from '../api';

type ChatMessage = { sender: 'user' | 'bot'; text: string };

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || pending) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setPending(true);

    try {
      const res = await sendMessage({
        message: userText,
      });

      const botText = res.response ?? '[sin respuesta]';

      setMessages(prev => [...prev, { sender: 'bot', text: botText }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error de conexión con el servidor.' }]);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-lg mx-auto p-4 border rounded">
      {/* Historial */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-xs break-words ${
              m.sender === 'user' ? 'bg-blue-100 self-end ml-auto' : 'bg-gray-200'
            }`}
          >
            {m.text}
          </div>
        ))}
        {pending && (
          <div className="p-2 rounded bg-gray-100 text-gray-500 w-fit">Escribiendo…</div>
        )}
      </div>

      {/* Input */}
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-l"
          placeholder="Escribe tu mensaje..."
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          disabled={pending}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 disabled:opacity-50"
          disabled={pending}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
