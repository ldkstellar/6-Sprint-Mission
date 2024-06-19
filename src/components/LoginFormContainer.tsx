import React, { ChangeEvent, useState } from 'react';
import LoginForm from './LoginForm';

export type OnChange = (e: ChangeEvent<HTMLInputElement>) => void;
export type onClick = () => void;
const LoginFormContainer = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const onChangeEmail: OnChange = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword: OnChange = (e) => {
    setPassword(e.target.value);
  };
  const onClick: onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LoginForm
      onClick={onClick}
      isOpen={isOpen}
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
};

export default LoginFormContainer;

