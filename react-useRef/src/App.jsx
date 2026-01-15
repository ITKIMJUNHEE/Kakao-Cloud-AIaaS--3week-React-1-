import { useState } from 'react';
import { RenderCount } from './RenderCount';
import { WhyDidYouUpdate } from './WhyDidYouUpdate';
import './App.css';

function App() {
  const [mode, setMode] = useState(0);

  return (
    <div className="card">
      {mode === 0 ? (
        // 메뉴 화면
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={() => setMode(1)}>3-1 실습</button>
          <button onClick={() => setMode(2)}>3-2 실습</button>
        </div>
      ) : (
        // 실습 화면
        <div style={{ textAlign: 'left' }}>
          <button 
            onClick={() => setMode(0)} 
            style={{ marginBottom: '20px', backgroundColor: '#666' }}
          >
            메뉴로 돌아가기
          </button>
          
          {mode === 1 && <RenderCount />}
          {mode === 2 && <WhyDidYouUpdate />}
        </div>
      )}
    </div>
  );
}

export default App;