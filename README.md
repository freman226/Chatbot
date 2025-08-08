# Chatbot Frontend – React + TypeScript

Este proyecto es la interfaz de un chatbot construida con **React**, **TypeScript** y **Tailwind CSS**, que se comunica con un backend mediante endpoints `/message` y `/context`.

---

## Características

- UI simple y funcional
- Comunicación con API backend vía JSON
- Manejo de sesión por `sessionId` único
- Preparado para despliegue en [Render](https://render.com)

---

##  Estructura del proyecto

```
chatbot-frontend/
├── public/
├── src/
│ ├── api.ts # Lógica de comunicación con backend
│ ├── types.ts # Definiciones de tipos (ChatMessage)
│ ├── session.ts # Generación y almacenamiento de sessionId
│ ├── components/
│ │ └── Chat.tsx # Vista del chat
│ ├── App.tsx # Enrutamiento principal
│ └── index.css # Styles con Tailwind
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
---

## Requisitos

- Node.js v18+ (recomendado)
- npm o yarn
- Acceso al backend (ver variable `VITE_DOMINIO_BACKEND`)

---

## Instalación

```bash
git clone https://github.com/tuusuario/chatbot-frontend.git
cd chatbot-frontend
npm install
npm run dev

