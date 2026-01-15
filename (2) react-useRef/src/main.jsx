import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// <StrictMode> 태그를 제거하여 두 번 렌더링되는 것을 막습니다.
createRoot(document.getElementById('root')).render(
  <App />
)