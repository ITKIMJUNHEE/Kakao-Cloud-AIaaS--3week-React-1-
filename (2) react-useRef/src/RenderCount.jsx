import { useState, useRef, useEffect } from 'react';

export function RenderCount() {
  const [dummy, setDummy] = useState(0);
  const count = useRef(1);

  useEffect(() => {
    count.current += 1;
  });

  return (
    <div>
      <h2>테스트</h2>
      <p>렌더링 횟수: {count.current}</p>
      <button onClick={() => setDummy(prev => prev + 1)}>렌더링 발생</button>
    </div>
  );
}