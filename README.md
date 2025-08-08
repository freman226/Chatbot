# Chatbot Frontend

Este proyecto es el frontend de un chatbot, desarrollado con **React**, **TypeScript** y **Vite**. Se comunica con un backend FastAPI para enviar y recibir mensajes.

## Requisitos

- Node.js 18+
- npm

## Instalación

1. **Clona el repositorio y entra a la carpeta del frontend:**

   ```sh
   cd Frontend/Chatbot
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

3. **Configura la URL del backend:**

   Edita el archivo `.env` y asegúrate de que la variable apunte a la URL de tu backend:

   ```
   VITE_DOMINIO_BACKEND=http://localhost:8000
   ```

## Ejecución en desarrollo

```sh
npm run dev
```

Esto abrirá la aplicación en [http://localhost:5173](http://localhost:5173) (puerto por defecto de Vite).

## Estructura de archivos

```
.
├── .env
├── package.json
├── vite.config.ts
├── src/
│   ├── api.ts
│   ├── App.tsx
│   ├── components/
│   │   └── Chat.tsx
│   └── ...
└── public/
```

- **`src/components/Chat.tsx`**: Componente principal del chat.
- **`src/api.ts`**: Funciones para comunicarse con el backend.
- **`.env`**: Configuración de la URL del backend.

## Notas

- El frontend requiere que el backend esté corriendo y accesible en la URL configurada.
- Puedes personalizar estilos y componentes según tus necesidades.
- Si cambias el puerto del backend, actualiza la variable en `.env`.

---