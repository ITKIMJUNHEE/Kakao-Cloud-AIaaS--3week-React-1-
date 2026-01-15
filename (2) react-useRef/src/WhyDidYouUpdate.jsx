import { useState, useRef, useEffect } from 'react';

export function WhyDidYouUpdate() {
  const [randomNum, setRandomNum] = useState(0);
  const prevValue = useRef(randomNum);

  useEffect(() => {
    // 값이 바뀌었을 때만 콘솔에 Before/After 출력
    if (prevValue.current !== randomNum) {
      console.log('[MyComponent] 변경된 항목:', {
        number: {
          from: prevValue.current,
          to: randomNum
        }
      });
    }
    // 현재 값을 저장해서 다음 비교에 사용
    prevValue.current = randomNum;
  });

  const handleRandom = () => {
    // 0~100 사이의 랜덤 숫자로 변경
    setRandomNum(Math.floor(Math.random() * 100));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{randomNum}</h1>
      <button onClick={handleRandom}>랜덤숫자변환</button>
    </div>
  );
}