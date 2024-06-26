import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // Step Button Handler
  function handleStepAdd() {
    return setStep((s) => s + 1);
  }
  function handleStepMinus() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  // Counter Button Handler
  function handleCountAdd() {
    return setCount((c) => c + step);
  }
  function handleCountMinus() {
    return setCount((c) => c - step);
  }

  return (
    <>
      <div className="step">
        <button onClick={handleStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepAdd}>+</button>
      </div>

      <div className="count">
        <button onClick={handleCountMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountAdd}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
