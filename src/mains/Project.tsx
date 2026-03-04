export default function Project() {
  return (
    <main className="calculator-container">
      <h3>Calculator</h3>
      <div id="calculator-wrapper">
        <div id="inputs">
          <input
            type="number"
            className="input-field"
            id="num1"
            placeholder="Enter first number"
          />
          <input
            type="number"
            className="input-field"
            id="num2"
            placeholder="Enter second number"
          />
        </div>
        <div id="buttons">
          <button>+</button>
          <button>+</button>
          <button>*</button>
          <button>/</button>
          <button>**</button>
          <button>C</button>
        </div>
        <p id="result"></p>
      </div>
    </main>
  );
}
