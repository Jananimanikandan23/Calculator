import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        if (!num1 || !num2) {
            alert("Please enter valid numbers");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/api/calculator/calculate`, {
                params: { num1, num2, operation }
            });
            setResult(response.data);
        } catch (error) {
            alert("Error: " + error.response?.data || "Something went wrong");
        }
    };

    return (
        <div className="calculator">
            <h2>React - Java Calculator</h2>
            <input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Addition (+)</option>
                <option value="subtract">Subtraction (-)</option>
                <option value="multiply">Multiplication (*)</option>
                <option value="divide">Division (/)</option>
                <option value="modulus">Modulus (%)</option>
                <option value="square">Square (x²)</option>
                <option value="sqrt">Square Root (√x)</option>
            </select>
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <h3>Result: {result}</h3>}
        </div>
    );
}

export default App;
