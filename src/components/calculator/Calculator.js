import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
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
        } catch (error) {
            setResult('Error')
        }
    };

    return (
        <>
            <div className='container'>
                <form action="">
                    <input type="text" value={result} />
                </form>
                <div className="input__data">
                    <button onClick={onClear} className='clear'>Clear</button>
                    <button onClick={onBack} className='back'>C</button>
                </div>

            </div>
        </>
    )
}

export default Calculator;