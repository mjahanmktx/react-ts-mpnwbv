import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button
        onClick={() => (count != 0 ? setCount(count - 1) : setCount(count))}
      >
        -
      </button>
    </div>
  );
}
