import { createContext, useState } from "react";
import { baseURL } from '../baseURL'

// Step 1: Creating
export const AppContext = createContext();

export default function AppContextProvider({ children }) {

	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);

	const fetchBlogPosts = async (currentPage) => {
		setLoading(true);
		let url = `${baseURL}?page=${currentPage}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			setPosts(data.posts);
			setCurrentPage(data.page);
			setTotalPages(data.totalPages);
		}
		catch (error) {
			console.log("Failed to fetching data!");
			setPosts([]);
			setCurrentPage(1);
			setTotalPages(null);
		}
		setLoading(false);
	};

	const clickHandler = (page) => {
		setCurrentPage(page);
		fetchBlogPosts(page);
	};

	const value = {
		loading, setLoading,
		posts, setPosts,
		currentPage, setCurrentPage,
		totalPages, setTotalPages,
		clickHandler, fetchBlogPosts
	};

	// Step 2: Providing
	return <AppContext.Provider value={value}>
		{children}
	</AppContext.Provider>;

}