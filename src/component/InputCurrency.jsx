import { useId, useState } from "react";

function InputCurrency({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
  const lableID = useId();
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor={lableID} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={lableID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}

          value={amount}
          onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
        value={selectCurrency}
        disabled={currencyDisable}
        onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
             {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                            </option>
                        ))}
        </select>
      </div>
    </div>
  );
}

export default InputCurrency;
