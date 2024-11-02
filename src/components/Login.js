import React from 'react';

const Login = () => {
  const loginInWithGoogle = () => {
    // Googleでログイン
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
