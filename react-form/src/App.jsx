import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import History from './History'; // History.jsx에서 export default를 찾습니다.

function App() {
  const [tab, setTab] = useState('1-2'); // 기본 화면을 History로 설정

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setTab('1-1')}>1-1 회원가입</button>
        <button onClick={() => setTab('1-2')}>1-2 History</button>
      </nav>

      <hr />

      <div style={{ marginTop: '20px' }}>
        {tab === '1-1' ? <RegistrationForm /> : <History />}
      </div>
    </div>
  );
}

export default App;