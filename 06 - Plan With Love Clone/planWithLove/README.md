# 💖 Plan With Love: A React Travel Planner

## 📄 **Description**

This project is a simple travel planner application built with **React** and **Vite**. Named "Plan With Love," the app displays a list of travel destinations and provides a practical example of **React's `useState` hook**. Users can interact with the list by clicking a "Not Interested" button to remove a destination, dynamically updating the UI and providing a hands-on demonstration of state management.

---

## ✨ **Features**

* **Dynamic List Rendering**: Displays a list of popular travel destinations.
* **Interactive UI**: Allows users to remove destinations from the list.
* **State Management with `useState`**: A clear, practical example of how to use state to control and update the user interface.
* **Modular Components**: The application is broken down into reusable components (`Card`, `Header`, `Main`).
* **Local Data**: Destination data is stored locally in a `data.js` file, making it easy to add or modify places.

---

## 🛠️ **Tech Stack**

* **React.js**: The core library for building the user interface.
* **Vite**: A fast build tool for a smooth development experience.
* **JavaScript (JSX)**: The programming language for application logic.
* **CSS**: For styling the application.

---

## 📁 **Folder Structure**

The project uses a standard Vite-React structure, with a clear organization for all files:
```

└── 📁planWithLove
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── 📁api            // Local data for the application
		│   └── data.js
		├── 📁assets         // Images and other general assets
		├── 📁components     // Reusable React components
		│   ├── Card.jsx     // Renders a single destination card
		│   ├── Header.jsx   // The application header
		│   └── Main.jsx     // Manages the list of cards and state
		├── 📁images         // Specific travel destination images
		│   ├── Agra.jpeg
		│   └── ...
		├── App.jsx          // The root component
		├── index.css        // Global styles
		└── main.jsx         // The entry point for the React app
```