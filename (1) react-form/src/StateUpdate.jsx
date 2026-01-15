import { useState } from 'react';

function StateUpdate() {
  const [count, setCount] = useState(0);
  const [countWithPrev, setCountWithPrev] = useState(0);

  // ❌ 잘못된 방법: 배칭 때문에 1만 증가
  const handleWrongUpdate = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // ✅ 올바른 방법: prev를 써서 정확히 3 증가
  const handleCorrectUpdate = () => {
    setCountWithPrev((prev) => prev + 1);
    setCountWithPrev((prev) => prev + 1);
    setCountWithPrev((prev) => prev + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <h2>React 상태 업데이트 비교</h2>
      <p>prev 미사용: {count} <button onClick={handleWrongUpdate}>+3 시도 (결과 +1)</button></p>
      <p>prev 사용: {countWithPrev} <button onClick={handleCorrectUpdate}>+3 시도 (결과 +3)</button></p>
    </div>
  );
}

export default StateUpdate;