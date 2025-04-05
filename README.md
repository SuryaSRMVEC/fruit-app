# 🍓 Fruit Collector App

A fullstack web app built with **React** and **Express.js** that lets you add fruits to a growing list! Deployed on **Render** with both frontend and backend served from a single project.

---

## 🚀 Live Demo

👉 [Visit the Live App](https://your-render-app-name.onrender.com)

---

## 🛠️ Tech Stack

- ⚛️ React (Frontend)
- 🟨 Express.js (Backend)
- 🌍 Node.js
- 📦 Deployed on [Render](https://render.com)

---

---

## 🔧 Features

- Add a fruit to the list
- View all previously added fruits
- Fullstack architecture with shared deployment
- Clean, responsive UI with minimal CSS

---

## 🧪 Local Development

### 1. Clone the repository


git clone https://github.com/yourusername/fruit-app.git
cd fruit-app
Frontend
bash
Copy
Edit
cd fruit-frontend
npm install
Backend
bash
Copy
Edit
cd ../backend
npm install
3. Build frontend & move it to backend
bash
Copy
Edit
cd ../fruit-frontend
npm run build
cp -r build ../backend/
4. Start the backend server
bash
Copy
Edit
cd ../backend
node index.js
App will run at http://localhost:5000

🌐 Deployment (on Render)
Push only the backend/ folder (which contains the build/ from frontend) to GitHub

Go to Render → New Web Service

Connect your GitHub repo

In Settings:

Root Directory: backend

Build Command: npm install

Start Command: node index.js

Deploy 🚀

Screenshot![image](https://github.com/user-attachments/assets/cac3ea46-6888-4619-b167-5575a8f4e23c)


