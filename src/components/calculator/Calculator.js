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
                    <button name='/' onClick={onClick}>&divide;</button>
                    <button name='7' onClick={onClick}>7</button>
                    <button name='8' onClick={onClick}>8</button>
                    <button name='9' onClick={onClick}>9</button>
                    <button name='*' onClick={onClick}>&times;</button>
                    <button name='4' onClick={onClick}>4</button>
                    <button name='5' onClick={onClick}>5</button>
                    <button name='6' onClick={onClick}>6</button>
                </div>

            </div>
        </>
    )
}

export default Calculator;