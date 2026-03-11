import { useState } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 20px 30px 30px;
  width: 70%;
  background-color: #f4faf7;
  font-size: calc(16px + 0.1vw);
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;

  h3 {
    margin-bottom: 12px;
    font-size: 24px;
    color: #1f2933;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const CalculatorWrapper = styled.div`
  width: 100%;
  max-width: 380px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 28px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  input {
    flex: 1 1 140px;
    padding: 9.6px 12px;
    font-size: 15.2px;
    border: 1px solid #d0d7e2;
    border-radius: 8px;
    outline: none;
    background-color: #f9fbff;
  }
`;

const Buttons = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;

  button {
    padding: 20px;
    font-weight: 600;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    background: #2f5d50;
    color: #ffffff;
  }
`;

const Result = styled.p<{ negative: boolean }>`
  margin: 0;
  font-weight: 500;
  color: ${({ negative }) => (negative ? "#dc2626" : "#111827")};
  text-align: center;
  border-radius: 8px;
  background-color: #f3f4ff;
`;

export default function Project() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    setResult(Number(num1) / Number(num2));
  };

  const handlePower = () => {
    setResult(Number(num1) ** Number(num2));
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult(0);
  };

  return (
    <StyledMain>
      <title>Projects | Resume</title>
      <h3>Calculator</h3>
      <CalculatorWrapper>
        <Inputs>
          <label htmlFor="num1">
            <input
              type="number"
              id="num1"
              placeholder="Enter first number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </label>
          <label htmlFor="num2">
            <input
              type="number"
              id="num2"
              placeholder="Enter second number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </label>
        </Inputs>
        <Buttons>
          <label htmlFor="add">
            <button onClick={handleAdd}>+</button>
          </label>
          <label htmlFor="subtract">
            <button onClick={handleSubtract}>-</button>
          </label>
          <label htmlFor="multiply">
            <button onClick={handleMultiply}>*</button>
          </label>
          <label htmlFor="divide">
            <button onClick={handleDivide}>/</button>
          </label>
          <label htmlFor="power">
            <button onClick={handlePower}>**</button>
          </label>
          <label htmlFor="clear">
            <button onClick={handleClear}>C</button>
          </label>
        </Buttons>
        <Result negative={result < 0}>{result}</Result>
      </CalculatorWrapper>
    </StyledMain>
  );
}
