import { useState } from "react";
import InputCurrency from "./component/InputCurrency";
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] = useState()
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertAmount,setConvertAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = (Object.keys(currencyInfo))

  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertAmount.toFixed(2));
    setConvertAmount(amount)
  }

  const convert = ()=>{
    setConvertAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e)=>{e.preventDefault();
              convert()}}
            >
              <div className="w-full mb-1">
                <InputCurrency
                label="From"
                selectCurrency={from}
                amount={amount}
                onCurrencyChange={(currency)=>{setFrom(currency)}}
                currencyOptions={options}
                onAmountChange={(amount)=>{setAmount(amount)}}
                />
              </div>


              <div className="relative w-full h-0.5">
                <button
                onClick={swap}
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>


              </div>
              <div className="w-full mt-1 mb-4">
              <InputCurrency
              label="To"
              selectCurrency={to}
              amount={convertAmount && convertAmount.toFixed(2)}
              onCurrencyChange={(currency)=>{setTo(currency)}}
              currencyOptions={options}
              amountDisable
              />

              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;