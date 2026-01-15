import { useState } from 'react';
import { useInterval } from './useInterval';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(c => c + 1);
  }, delay);

  return (
    <div className="card">
      <h1>문제 6: useInterval 구현</h1>
      <p>Count: <strong>{count}</strong></p>
      <p>현재 지연 시간: {delay === null ? '정지됨' : `${delay}ms`}</p>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setDelay(delay ? null : 1000)}>
          {delay ? '정지' : '시작'}
        </button>
        <button onClick={() => setDelay(d => d ? d / 2 : 1000)}>
          속도 2배
        </button>
        <button onClick={() => setDelay(1000)}>
          리셋 (1초)
        </button>
      </div>
    </div>
  );
}

export default App;