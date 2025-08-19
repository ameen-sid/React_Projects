# ⚛️ Counter with Redux Toolkit

## 📄 **Description**

This project is a counter application built with **React** and **Redux Toolkit**. It serves as a fundamental example of how to implement **global state management** using Redux in a modern React application. By centralizing the application's state in a Redux store, the project demonstrates a clean and predictable way to manage data, separate UI logic from state logic, and scale complex applications.

---

## ✨ **Features**

-   **Centralized State**: Manages the counter's state globally using a Redux store.
-   **Redux Toolkit**: Utilizes Redux Toolkit to simplify Redux setup and boilerplate code.
-   **Redux Slices**: A clear example of a Redux slice (`CounterSlice.jsx`) that encapsulates the reducer and actions for a specific feature.
-   **UI-State Separation**: The React components are responsible for rendering the UI and dispatching actions, while the Redux store handles the state updates.

---

## 🛠️ **Tech Stack**

-   **React.js**: The core library for building the user interface.
-   **Redux Toolkit**: The official, opinionated toolset for efficient Redux development.
-   **React Redux**: The official React bindings for Redux.
-   **Vite**: The build tool for a fast and efficient development experience.
-   **Tailwind CSS**: A utility-first CSS framework for styling.
-   **JavaScript (JSX)**: The programming language for application logic.

---

## 📁 **Folder Structure**

The project uses a standard Vite-React structure, with a dedicated `redux` directory for state management:

```
└── 📁counterWithReduxToolkit
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── 📁redux          // Directory for Redux setup and slices
		│   ├── 📁slices     // Redux slices for different features
		│   │   └── CounterSlice.jsx
		│   └── store.js     // The Redux store configuration
		├── App.jsx          // The main application component
		├── index.css        // Global styles
		└── main.jsx         // The entry point for the React application
```
