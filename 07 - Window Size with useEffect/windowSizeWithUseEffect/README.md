# 🖼️ Window Size Tracker App

## 📄 **Description**

This project is a simple web application that dynamically displays the current width and height of the browser window. It serves as a practical example of the **`useEffect` hook** in React, specifically demonstrating how to handle side effects and listen for events (in this case, the `resize` event) to keep the UI in sync with external changes.

---

## ✨ **Features**

-   **Dynamic Size Display**: Shows the real-time width and height of the window in pixels.
-   **Responsive**: The displayed size automatically updates as the user resizes the browser window.
-   **Practical `useEffect` Example**: A straightforward and clear illustration of how to use `useEffect` for cleanup (removing the event listener) and managing component lifecycle.

---

## 🛠️ **Tech Stack**

-   **React.js**: The core library for building the user interface.
-   **Vite**: The build tool used for a fast development environment.
-   **JavaScript (JSX)**: The programming language for the application's logic.
-   **CSS**: For styling the text and layout.

---

## 📁 **Folder Structure**

The project uses a minimal and standard Vite-React folder structure:

```
└── 📁windowSizeWithUseEffect
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── App.jsx          // The main application component that contains the logic for tracking the window size
		├── index.css        // Global styles for the app
		└── main.jsx         // The entry point for the React application
```
