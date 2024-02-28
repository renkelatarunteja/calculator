
import React, { useState } from 'react';
import './Calculator.css'; // Import CSS file for styling

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const addToInput = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const clearInput = () => {
    setExpression('');
    setResult('');
  };

  const calculate = () => {
    if (expression.trim() === '') {
      setResult('Error');
      return;
    }
  
    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  }; // Added missing closing brace for calculate function

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <div>{result}</div>
      <div>
        <button onClick={() => addToInput('7')}>7</button>
        <button onClick={() => addToInput('8')}>8</button>
        <button onClick={() => addToInput('9')}>9</button>
        <button onClick={() => addToInput('+')}>+</button>
      </div>
      <div>
        <button onClick={() => addToInput('4')}>4</button>
        <button onClick={() => addToInput('5')}>5</button>
        <button onClick={() => addToInput('6')}>6</button>
        <button onClick={() => addToInput('-')}>-</button>
      </div>
      <div>
        <button onClick={() => addToInput('1')}>1</button>
        <button onClick={() => addToInput('2')}>2</button>
        <button onClick={() => addToInput('3')}>3</button>
        <button onClick={() => addToInput('*')}>*</button>
      </div>
      <div>
        <button onClick={() => addToInput('0')}>0</button>
        <button onClick={() => addToInput('/')}>/</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
