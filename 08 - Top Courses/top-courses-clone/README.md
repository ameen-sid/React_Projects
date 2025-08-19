# 🎓 Top Courses: A React Filter App

## 📄 **Description**

This project is a web application that displays a curated list of top courses. The app provides a practical example of **state management and conditional rendering** in React, allowing users to filter courses by category. When a user clicks a filter tab (e.g., "Development," "Design"), the displayed courses are dynamically updated to show only the ones that match the selected category.

---

## ✨ **Features**

-   **Category-Based Filtering**: Users can filter the course list by selecting different tabs (e.g., All, Development, Business).
-   **Dynamic UI**: The list of course cards updates in real time based on the selected filter.
-   **Component-Based Architecture**: The application is composed of reusable components (`Navbar`, `Filters`, `Cards`, `Card`) for better organization and maintainability.
-   **Local Data**: Course data is stored locally in a `data.js` file, making it easy to manage and extend the list.

---

## 🛠️ **Tech Stack**

-   **React.js**: The core library for building the user interface.
-   **Vite**: A fast build tool for a streamlined development experience.
-   **Tailwind CSS**: A utility-first CSS framework for styling.
-   **JavaScript (JSX)**: The programming language for application logic.

---

## 📁 **Folder Structure**

The project uses a standard Vite-React structure, with a clear separation of concerns:

```
└── 📁top-courses-clone
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── 📁components     // Reusable React components
		│   ├── Card.jsx     // Renders a single course card
		│   ├── Cards.jsx    // Manages the rendering of all course cards
		│   ├── Filters.jsx  // Component for the category filter tabs
		│   └── Navbar.jsx   // The application's navigation bar
		├── 📁data           // Local data files
		│   └── data.js
		├── App.jsx          // The root component that integrates all others
		├── index.css        // Global styles
		└── main.jsx         // The entry point for the React application
```
