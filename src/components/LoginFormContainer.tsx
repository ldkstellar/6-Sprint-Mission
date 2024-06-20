import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { postRefreshToken, postSignIn } from '../api/api';
import LoginForm from './LoginForm';

const LoginFormContainer = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const eyeButtonClickHandler = () => {
    setIsOpen(!isOpen);
  };
  const loginClickHandler = async () => {
    try {
      await postSignIn(email, password);
      route.push('/');
    } catch (error) {}
  };
  return (
    <LoginForm
      eyeButtonClickHandler={eyeButtonClickHandler}
      isOpen={isOpen}
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      loginClickHandler={loginClickHandler}
    />
  );
};

export default LoginFormContainer;

