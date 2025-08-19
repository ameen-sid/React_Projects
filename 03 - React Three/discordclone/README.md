# 💬 Discord Website Clone

## 📄 **Description**

This project is a static website that clones the main landing pages of the popular communication platform, Discord. Built with **React** and standard **CSS**, it's a portfolio piece demonstrating skill in front-end development, responsive design, and component-based architecture. The project includes the home page and the download page, replicating Discord's modern and distinctive UI.

---

## ✨ **Features**

-   **Responsive Design**: The website is fully responsive, providing a seamless user experience across various devices and screen sizes.
-   **Component-Based UI**: The user interface is broken down into reusable React components for easy maintenance and scalability.
-   **Home Page**: A replica of the main Discord landing page with a hero section, feature highlights, and a comprehensive footer.
-   **Download Page**: A dedicated page showcasing different versions of the Discord application for various operating systems.
-   **Asset Management**: All images and icons are organized and managed efficiently within the `assets` folder.

---

## 🛠️ **Tech Stack**

-   **React.js**: A JavaScript library for building user interfaces.
-   **JavaScript (JSX)**: The programming language for application logic and templating.
-   **CSS**: For all styling, layout, and visual presentation.

---

## 📁 **Folder Structure**

The project is structured logically for clarity and ease of navigation:

```
└── 📁discordclone
	├── 📁public // Contains the main HTML file and other public assets
	│ 	├── index.html
	│ 	└── ...
	└── 📁src // All source code
		├── 📁assets // Stores all image and SVG assets
		│ 	├── downlaodHeaderLaptop.svg
		│ 	└── ...
		├── 📁components // Reusable React components
		│ 	├── 📁common // Shared components like Navbar
		│ 	├── 📁download // Components specific to the Download page
		│ 	├── 📁home // Components specific to the Home page
		│ 	├── 📁footer
		│ 	├── 📁header
		│ 	└── 📁main
		├── 📁data // JSON files for static data (e.g., navigation links)
		├── 📁pages // React components for different pages
		│ 	├── Download.jsx
		│ 	└── Home.jsx
		├── 📁styles // Global and modular CSS files
		│ 	└── style.css
		├── App.js // The root component that manages routing
		└── index.js // The entry point for the React application
```
