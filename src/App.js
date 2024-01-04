import React, { useState } from 'react';
import './App.css';

import Calculator from './components/calculator/Calculator';

function App() {
  const [result, setResult] = useState('');

  const onClick = (e) => {       
    setResult(result.concat(e.target.name))
          
  }


  return (
    <Calculator />
  );
}

export default App;
