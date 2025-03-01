// src/Calculator.jsx
import React, { useState } from 'react';
import './Calculator.css'; // Optional: for styling

const Calculator = () => {
    const [input, setInput] = useState('0');

    const handleButtonClick = (value) => {
        if (input === '0') {
            setInput(value);
        } else {
            setInput((prev) => prev + value);
        }
    };

    const handleClear = () => {
        setInput('0');
    };

    const handleCalculate = () => {
        try {
            // Use Function constructor instead of eval for better security
            const result = Function(`'use strict'; return (${input})`)();
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <h1 className='heading'>Calculator</h1>
            <input type="text" value={input} readOnly />
            <div className="buttons">
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={handleClear}>C</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
        </div>
    );
};

export default Calculator;

