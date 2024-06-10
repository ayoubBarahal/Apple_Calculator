import React, { useState } from 'react';
import './App.css'; // Optional: Add CSS to style the calculator

const Calculator = () => {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {

    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
      <button onClick={handleClear} className='tools'>C</button>
      <button onClick={handleClear} className='tools'>+/-</button>
      <button onClick={handleClear} className='tools'>%</button>
      <button onClick={() => handleClick('/')} className='operator'>/</button>

      <button onClick={() => handleClick('7')} className='num'>7</button>
        <button onClick={() => handleClick('8')} className='num'>8</button>
        <button onClick={() => handleClick('9')} className='num'>9</button>
        <button onClick={() => handleClick('*')} className='operator'>*</button>

        <button onClick={() => handleClick('4')} className='num'>4</button>
        <button onClick={() => handleClick('5')} className='num'>5</button>
        <button onClick={() => handleClick('6')} className='num'>6</button>
        <button onClick={() => handleClick('-')} className='operator'>-</button>

        <button onClick={() => handleClick('1')} className='num'>1</button>
        <button onClick={() => handleClick('2')} className='num'>2</button>
        <button onClick={() => handleClick('3')} className='num'>3</button>
        <button onClick={() => handleClick('+')} className='operator'>+</button>
        
       
        <button onClick={() => handleClick('0')} className='num0'>0</button>
        <button onClick={() => handleClick(',')} className='num'>,</button>

        <button onClick={handleCalculate} className='operator'>=</button>
      </div>
    </div>
  );
};

export default Calculator;
