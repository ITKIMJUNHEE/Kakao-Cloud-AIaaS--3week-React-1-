import { useState } from 'react';

function RegistrationForm() {
    const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };


  const handleReset = () => {
    setFormData(initialValues);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newErrors = {};
    if (!formData.username) newErrors.username = '이름을 입력해 주세요.';
    if (!formData.email.includes('@')) newErrors.email = '이메일 형식이 올바르지 않습니다.';
    if (formData.password.length < 4) newErrors.password = '비밀번호는 4자 이상이어야 합니다.';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);

    
    if (Object.keys(newErrors).length === 0) {
      console.log('최종 데이터:', formData); 
      alert('성공적으로 제출되었습니다!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        
        {/* 이름 입력 */}
        <input 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange('username')} 
        />
        {errors.username && <span style={{ color: 'red', fontSize: '12px' }}>{errors.username}</span>}

        {/* 이메일 입력 */}
        <input 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange('email')} 
        />
        {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}

        {/* 비밀번호 입력 */}
        <input 
          type="password"
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange('password')} 
        />
        {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password}</span>}

        {/* 비밀번호 확인 */}
        <input 
          type="password"
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange('confirmPassword')} 
        />
        {errors.confirmPassword && <span style={{ color: 'red', fontSize: '12px' }}>{errors.confirmPassword}</span>}

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button type="submit">제출</button>
          <button type="button" onClick={handleReset} style={{ backgroundColor: '#ccc' }}>리셋</button>
        </div>
      </form>
    </div>
  );
}



export default RegistrationForm;