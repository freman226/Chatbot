import React, { useState } from 'react';
import type { ChatMessage } from '../types';
import { sendMessage } from '../api';
import { getSessionId } from '../session';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const sessionId = getSessionId();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await sendMessage({ sessionId, message: input });
      const botMessage: ChatMessage = { sender: 'bot', text: res.text };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error de conexión.' }]);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-lg mx-auto p-4 border rounded">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-xs break-words ${
              msg.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-l"
          placeholder="Escribe tu mensaje..."
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;