# 🛒 Ecomzy: A React E-commerce Cart

---

## 📄 **Description**

This project is a basic e-commerce application built with **React** and **Redux Toolkit**. It focuses on implementing core cart functionality, including adding and removing products, and calculating the total cart amount. By using Redux Toolkit, the project demonstrates how to manage complex application state, such as the shopping cart, in a predictable and scalable way.

---

## ✨ **Features**

-   **Product Display**: Renders a list of products on the home page.
-   **Add to Cart**: Users can add products to their shopping cart.
-   **Remove from Cart**: Products can be removed from the cart.
-   **Cart Summary**: The cart page displays all items, along with a total price.
-   **Redux Toolkit for State Management**: The entire cart state is managed centrally using Redux slices, making it easy to track and modify data across the application.
-   **Dynamic Routing**: Uses React Router to navigate between the home page and the cart page.
-   **Loading Spinner**: A spinner component is displayed while product data is being fetched.

---

## 🛠️ **Tech Stack**

-   **React.js**: The core library for building the user interface.
-   **Redux Toolkit**: The official, opinionated toolset for efficient Redux development.
-   **React Redux**: The official React bindings for Redux.
-   **React Router**: For client-side routing.
-   **Vite**: The build tool for a fast development experience.
-   **Tailwind CSS**: A utility-first CSS framework for styling.

---

## 📁 **Folder Structure**

The project is structured logically for clarity and scalability:

```
└── 📁CartProject
	├── 📁public             // Static assets
	│   └── vite.svg
	└── 📁src                // All source code
		├── 📁assets         // Contains images and other assets
		├── 📁components     // Reusable UI components (Navbar, Product, CartItem, Spinner)
		├── 📁pages          // Components that represent individual pages (Home, Cart, NotFound)
		├── 📁redux          // Directory for Redux setup and slices
		│   └── 📁slices     // Redux slices for different features
		│       └── CartSlice.jsx
		│   └── store.jsx    // The Redux store configuration
		├── App.jsx          // The main component that defines the routes
		├── index.css        // Global styles
		└── main.jsx         // The entry point for the React application
```
