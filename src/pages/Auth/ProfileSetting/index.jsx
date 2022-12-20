import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ProfileSetting() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  // 이메일, 비밀번호 정보 없는 상태에서 URL에 /signup/profile하면 회원가입 페이지로 이동
  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  return <div>ProfileSetting</div>;
}

export default ProfileSetting;
