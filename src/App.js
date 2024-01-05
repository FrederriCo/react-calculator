import React, { useState } from 'react';
import './App.css';

import Calculator from './components/calculator/Calculator';

function App() {
  const [result, setResult] = useState('');

  const onClick = (e) => {
    setResult(result.concat(e.target.name))
  };

  const onClear = () => {
    setResult('')
  };

  const onBack = () => {
        setResult(result.slice(0, result.length - 1)); 
  };

  const onCalculate = () => {
    try {
        setResult(Number(eval(result).toString()).toFixed(15));
    } catch () {
        setResult()
    }      
};


  return (
    <Calculator />
  );
}

export default App;
