## 📝 Task Management App (for FIP Week 8)

A **Kanban-style task management application** built using **React, Redux, Material-UI (MUI), and Drag & Drop** functionality. This app allows users to manage tasks across different boards, switch themes (light/dark mode), and experience a smooth UI powered by **Material-UI**.

---

## 🚀 Features

✅ **Add, Delete & Move Tasks** between different task columns (To-Do, In Progress, Done).  
✅ **Drag & Drop Support** for reordering tasks seamlessly.  
✅ **Redux for State Management** to handle tasks efficiently.  
✅ **Context API for Theme Switching** between light and dark modes.  
✅ **Material-UI (MUI) Components** for a modern UI design.  
✅ **Responsive Design** to work on all screen sizes.

---

## 🖥️ Technologies Used

- **React** – Core library for building UI.
- **Redux Toolkit** – State management for tasks.
- **Material-UI (MUI)** – UI components for a polished look.
- **@hello-pangea/dnd** – Drag & Drop functionality.
- **FontAwesome** – Icons for the UI.
- **Bootstrap** – For some layout.

---

## 🎨 Material-UI (MUI) Integration

**Material-UI** is a React component library that provides **ready-made** UI elements with a modern design. In this app, it is used for:  
✔ **Grid System** for task layout.  
✔ **Paper & Typography** for task columns and cards.  
✔ **IconButton** for theme toggling.  
✔ **Dark Mode Support** using MUI’s `createTheme()`.

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/YOUR_USERNAME/task-manager.git
cd task-manager
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the App

```sh
npm run dev
```

The app will open on `http://localhost:5173/` (if using Vite).

---

## 📌 Folder Structure

```
/src
│── components/   # Reusable UI components
│── pages/        # Main pages like Board.jsx
│── redux/        # Redux state management
│── context/      # ThemeContext for dark mode
│── App.jsx       # Main entry point
│── main.jsx      # Renders App component
│── index.css     # Global styles
```

---

## 📜 License

This project is **Free** – Feel free to use and modify!
