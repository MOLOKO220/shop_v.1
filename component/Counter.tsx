"use client";

import { useState, useEffect } from "react";

interface CounterProps {
  onCountChange: (count: number) => void;
}

const Counter: React.FC<CounterProps> = ({ onCountChange }) => {
  const [count, setCount] = useState<number>(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  useEffect(() => {
    onCountChange(count);
  }, [count, onCountChange]);

  return (
    <main className="Counter">
      <span onClick={increment}>+</span>
      <div>{count}</div>
      <span onClick={decrement}>-</span>
    </main>
  );
};

export default Counter;
