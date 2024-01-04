import './App.css';

import Calculator from './components/calculator/Calculator';

function App() {
  const [result, setResult] = useState('');
  
  return (
    <Calculator />
  );
}

export default App;
