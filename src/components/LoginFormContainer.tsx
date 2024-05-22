import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import LoginForm from './LoginForm';

export type OnChange = (e: ChangeEvent<HTMLInputElement>) => void;

const LoginFormContainer = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onChangeEmail: OnChange = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword: OnChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginForm
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
};

export default LoginFormContainer;

