import React from "react";
import '../styleBoard.module.css';

const NumberManipulator = ({ number, updateNumber,isActive }) => {
    const plusOne = () => updateNumber(number + 1);
    const minusOne = () => updateNumber(number - 1);
    const double = () => updateNumber(number * 2);
    const half = () => updateNumber (Math.floor (number / 2));

    return (
        <div className="number-manipulator">
            <h1>{number}</h1>
            <button onClick={plusOne} disabled={number === 100 || !isActive}>+1</button>
            <button onClick={minusOne} disabled={number === 100 || !isActive}>-1</button>
            <button onClick={double} disabled={number === 100 || !isActive}>*2</button>
            <button onClick={half} disabled={number === 100 || !isActive}>/2</button>
        </div>
    );
}

export default NumberManipulator;
