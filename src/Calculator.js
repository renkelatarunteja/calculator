import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '/', '='].map(value => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
