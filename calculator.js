import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));

  const divide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "20px" }}> Simple Calculator</h2>

        {/* Inputs */}
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={inputStyle}
        />

        {/* Buttons */}
        <div style={btnContainer}>
          <button onClick={add} style={btnStyle}>+</button>
          <button onClick={subtract} style={btnStyle}>−</button>
          <button onClick={multiply} style={btnStyle}>×</button>
          <button onClick={divide} style={btnStyle}>÷</button>
        </div>

        {/* Result */}
        <div style={resultStyle}>
          Result: {result}
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #667eea, #764ba2)"
};

const cardStyle = {
  backdropFilter: "blur(15px)",
  background: "rgba(255, 255, 255, 0.1)",
  padding: "30px",
  borderRadius: "15px",
  width: "320px",
  textAlign: "center",
  color: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "14px"
};

const btnContainer = {
  marginTop: "15px"
};

const btnStyle = {
  margin: "6px",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "none",
  background: "#ffffff",
  color: "#333",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s"
};

const resultStyle = {
  marginTop: "20px",
  padding: "12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.2)",
  fontWeight: "bold"
};

export default Calculator;