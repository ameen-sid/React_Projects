import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {

	const [data, setData] = useState({});
  
	const getCurrencyInfo = async () => {
		const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
		const output = await response.json();
		setData(output[currency]);
	}

	useEffect( () => {
		getCurrencyInfo();
	}, [currency]);

	
	return data;
}

export default useCurrencyInfo