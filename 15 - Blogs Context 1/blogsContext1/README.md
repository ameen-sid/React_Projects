# ✍️ Blogs with Context API & Pagination

## 📄 **Description**

This project is a dynamic blog application built with **React** that demonstrates advanced state management using the **Context API**. Instead of passing props down manually through multiple component levels, the app uses Context to efficiently share blog posts, loading status, and pagination details across the component tree. It also features a working pagination system that fetches new sets of blog posts, providing a practical example of handling complex data fetching and UI updates.

---

## ✨ **Features**

-   **Context API for State Management**: Efficiently manages and provides global state for blog posts, loading status, and page information.
-   **Pagination**: Allows users to navigate through different pages of blog posts, with a clear display of the current page and total pages.
-   **API Integration**: Fetches blog data from a local `baseURL.js` file (simulating an API call).
-   **Loading Spinner**: A dedicated spinner component is shown while blog posts are being fetched, improving the user experience.
-   **Modular Components**: The app is broken down into clean, reusable components like `Header`, `Blogs`, `Pagination`, and `Post`.

---

## 🛠️ **Tech Stack**

-   **React.js**: The core library for building the user interface.
-   **Vite**: A fast build tool for a streamlined development experience.
-   **JavaScript (JSX)**: The programming language for application logic.
-   **CSS**: For styling the application.

---

## 📁 **Folder Structure**

The project is structured logically for clarity and scalability:

```
└── 📁blogsContext1
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── 📁components     // Reusable UI components
		│   ├── Blogs.jsx
		│   ├── Header.jsx
		│   ├── Pagination.jsx
		│   ├── Spinner.jsx
		│   └── ...
		├── 📁context        // Contains the React Context provider and state logic
		│   └── AppContext.jsx
		├── App.jsx          // The root component that wraps the app in the context provider
		├── baseURL.js       // Simulates an API endpoint with a base URL
		├── index.css        // Global styles
		└── main.jsx         // The entry point for the React application
```
