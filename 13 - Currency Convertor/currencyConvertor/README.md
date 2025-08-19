# 💱 Currency Converter App

## 📄 **Description**

This project is a modern currency converter application built with **React** and **Vite**. It allows users to convert between different currencies by fetching real-time exchange rates from an external API. A key feature of this project is the use of **custom React hooks**, which demonstrates how to abstract complex logic (like API calls) into reusable functions, keeping components clean and focused on rendering.

---

## ✨ **Features**

-   **Real-time Currency Conversion**: Fetches up-to-date currency exchange rates from an API.
-   **Custom Hooks**: Utilizes a custom hook (`useCurrencyInfo`) to handle API calls and data fetching.
-   **Dynamic UI**: The application updates automatically as the user changes the currency or amount.
-   **Reusable Components**: The input fields are encapsulated in a reusable `InputBox` component.
-   **Modern Styling**: Styled using Tailwind CSS for a clean and responsive design.

---

## 🛠️ **Tech Stack**

-   **React.js**: The core library for building the user interface.
-   **Vite**: A fast build tool for a streamlined development experience.
-   **Tailwind CSS**: A utility-first CSS framework for styling.
-   **JavaScript (JSX)**: The programming language for application logic.

---

## 📁 **Folder Structure**

The project is structured logically for clarity and scalability:

```
└── 📁currencyConvertor
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── 📁components     // Reusable UI components
		│   └── InputBox.jsx
		├── 📁hooks          // Custom React hooks
		│   └── useCurrencyInfo.js
		├── App.jsx          // The main application component
		├── index.css        // Global styles
		└── main.jsx         // The entry point for the React application
```
