# 🔑 Password Generator App

## 📄 **Description**

This project is a straightforward and secure password generator built with **React** and **Vite**. It provides a clean user interface that allows you to generate a random password based on custom criteria, such as length and character types (numbers and special characters). The application demonstrates key React concepts, including **state management** with `useState` and handling **side effects** with `useEffect` to regenerate the password when the settings change.

---

## ✨ **Features**

* **Generate Random Passwords**: Create a new, unique password with a single click.
* **Customizable Settings**: Control the password length and include or exclude numbers and special characters.
* **Copy to Clipboard**: A "Copy" button allows you to instantly copy the generated password to your clipboard.
* **Real-time Updates**: The password automatically updates as you change the generation settings.

---

## 🛠️ **Tech Stack**

* **React.js**: The core library for building the user interface.
* **Vite**: The build tool for a fast and efficient development experience.
* **Tailwind CSS**: A utility-first CSS framework for styling.
* **JavaScript (JSX)**: The programming language for application logic.

---

## 📁 **Folder Structure**

The project uses a standard Vite-React structure, with a focus on simplicity:

```
└── 📁passwordGenerator
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── App.jsx          // The main application component that contains all the logic and UI
		├── index.css        // Global styles
		└── main.jsx         // The entry point for the React application
```