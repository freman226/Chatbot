# Chatbot Frontend – React + TypeScript

Este proyecto es la interfaz de un chatbot construida con **React**, **TypeScript** y **Tailwind CSS**, que se comunica con un backend mediante endpoints `/message` y `/context`.

---

## Características

- UI simple y funcional
- Comunicación con API backend vía JSON
- Manejo de sesión por `sessionId` único
- ⚙Preparado para despliegue en [Render](https://render.com)

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

