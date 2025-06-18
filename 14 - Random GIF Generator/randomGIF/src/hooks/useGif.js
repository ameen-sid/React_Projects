import axios from 'axios';
import { useEffect, useState } from 'react';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = "BKsrFYTOPE30j0TDn0k6PyNnHKHwm9ah";

const useGif = (tag) => {	
	
	const randomMemeURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
	const tagMemeURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

	const [gif, setGif] = useState("");
	const [loading, setLoading] = useState(false);

	const fetch = async () => {
		setLoading(true);
		const {data} = await axios.get(tag ? tagMemeURL : randomMemeURL);  
		setGif(data.data.images.downsized_large.url);
		setLoading(false);
	}

	useEffect( () => {
		fetch();
	}, []);

  return {gif, loading, fetch};
}

export default useGif