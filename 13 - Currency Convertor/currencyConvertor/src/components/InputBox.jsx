import React, { useState } from 'react'

const InputBox = ({ label, amount, onAmountChange, currency, onCurrencyChange, options=[], amountDisable=false, className="" }) => {

	const [currencyVal, setCurrencyVal] = useState(currency);

	const changerHandler = (e) => {
		setCurrencyVal(e.target.value);
		onCurrencyChange(e.target.value);
	}

	return (
		<section className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

			<div className="w-1/2">	
				<label className="text-black/40 mb-2 inline-block">{label}</label>
				<input 
					className="outline-none w-full bg-transparent py-1.5" 
					type="number"
					placeholder="Amount"
					disabled={amountDisable}
					value={amount}
					onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value))}
				/>
			</div>

			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency Type</p>
				<select value={currencyVal} onChange={changerHandler} className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
					{
						options.map( (currElem) => (
							<option value={currElem}>{currElem}</option>
						))
					}
				</select>
			</div>
			
		</section>
	);
}

export default InputBox