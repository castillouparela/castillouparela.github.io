---
title: career_conversation_decu
app_file: app.py
sdk: gradio
sdk_version: 5.49.1
---

# Career Conversation App

Esta aplicación es un chatbot interactivo que ayuda con conversaciones sobre carreras profesionales, construido con Gradio.

## Descripción

El código principal está en `app.py`. Esta app permite chatear sobre temas relacionados con carreras, usando IA para proporcionar respuestas útiles.

## Preparación antes del despliegue

### 1. Actualiza tus datos personales
- Edita los archivos en la carpeta `me/` (tu perfil de LinkedIn y `summary.txt`) para que hablen de ti.
- Cambia `self.name = "Daniel Castillo"` en `app.py` por tu nombre.

### 2. Limpieza opcional
- Elimina cualquier archivo README dentro de la carpeta `foundations` (el proceso de despliegue crea uno nuevo).
- Opcionalmente, borra la carpeta `community_contributions` para reducir el tamaño del upload (puedes recuperarla de GitHub después).

## Pasos para desplegar en Hugging Face Spaces

### 1. Crea una cuenta en Hugging Face
- Ve a [https://huggingface.co](https://huggingface.co) y regístrate.

### 2. Genera un token de acceso
- En tu perfil (avatar arriba a la derecha), selecciona "Access Tokens".
- Crea un nuevo token con permisos de **WRITE**.
- Guarda el token generado (empieza con `hf_`).

### 3. Instala y configura las herramientas
- En la terminal, instala la herramienta de Hugging Face:  
  `uv tool install 'huggingface_hub[cli]'`
- Inicia sesión con tu token:  
  `hf auth login --token TU_TOKEN_AQUI`  
  (Ejemplo: `hf auth login --token hf_xxxxxx`)
- Verifica el login:  
  `hf auth whoami`

### 4. Agrega el token a tu archivo .env
- Crea o edita `.env` y agrega:  
  `HF_TOKEN=hf_xxx`

### 5. Despliega la app
- Desde la carpeta `foundations`, ejecuta:  
  `uv run gradio deploy`
- Sigue las instrucciones:
  - Nómbralo "career_conversation"
  - Especifica `app.py` como archivo principal
  - Elige "cpu-basic" como hardware
  - Di "Sí" cuando pregunte si necesitas secrets
  - Proporciona tu clave de API de OpenAI, usuario y token de Pushover
  - Di "No" a GitHub Actions

¡Listo! Tu app estará disponible en Hugging Face Spaces.

## Notas importantes
- Asegúrate de que tu token tenga permisos de escritura.
- Si encuentras problemas, revisa la documentación de [Hugging Face Spaces](https://huggingface.co/docs/hub/spaces).

## Enlaces útiles
- [Documentación de Gradio](https://www.gradio.app/)
- [Guía de Spaces](https://huggingface.co/docs/hub/spaces)