# 🎭 Random GIF Generator App

## 📄 **Description**

This is a web application that generates random GIFs based on a user's request. Built with **React** and **Vite**, this project is a practical example of **custom React hooks** and **API fetching**. It demonstrates how to create a reusable hook (`useGif`) to encapsulate the logic for making API calls to fetch new GIFs, keeping the main components clean and focused on rendering.

---

## ✨ **Features**

-   **Generate Random GIFs**: Click a button to get a new random GIF.
-   **Search by Tag**: Enter a keyword to find a random GIF related to a specific topic.
-   **Custom Hooks**: The logic for fetching GIFs and managing loading states is abstracted into a custom `useGif` hook.
-   **Loading Spinner**: A spinner is displayed while the GIF is being loaded, providing a better user experience.
-   **Modern Styling**: The app is styled using Tailwind CSS for a clean and responsive look.

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
└── 📁randomGIF
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── 📁components     // Reusable UI components
		│   ├── Navbar.jsx   // The application's navigation bar
		│   ├── Spinner.jsx  // A simple loading spinner component
		│   └── Tag.jsx      // A component for tagged GIF generation
		├── 📁hooks          // Custom React hooks
		│   └── useGif.js    // The custom hook for fetching GIF data
		├── App.jsx          // The main application component
		├── index.css        // Global styles
		└── main.jsx         // The entry point for the React application
```
