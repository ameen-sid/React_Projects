import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

const App = () => {

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount( amount * currencyInfo[to])
  }

  const submitHandler = (e) => {
    e.preventDefault();
    convert();
  }

  return (
    <main className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
        <section className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                <form onSubmit={submitHandler}>

                    <div className="w-full mb-1">
                         {/* Query */}
                        <InputBox 
                          label="From" 
                          amount={amount}
                          // amountDisable
                          onAmountChange={ (value) => setAmount(value) }
                          currency={from}
                          onCurrencyChange={ (currency) => setFrom(currency) }
                          options={options}
                        />
                    </div>

                    <div type="button" className="relative w-full h-0.5">
                        <button onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">swap</button>
                    </div>

                    <div className="w-full mt-1 mb-4">
                        {/* Disable */}
                        <InputBox 
                          label="To"
                          amount={convertedAmount}
                          amountDisable
                          // onAmountChange={}
                          currency={to}
                          onCurrencyChange={ (currency) => setTo(currency) }
                          options={options}
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert From {from.toUpperCase()} To {to.toUpperCase()} </button>

                </form>

            </div>
        </section>
    </main>
  );
}

export default App