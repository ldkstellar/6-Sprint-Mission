import React, { ChangeEvent, useEffect, useState } from 'react';
import SignUpForm from './SignUpForm';
import { emailError, pwError } from '../util/loginCheck';
export interface SignUp {
  email: string;
  nickName: string;
  password: string;
  repeatPassWord: string;
}
export interface Show {
  passShow: boolean;
  repeatShow: boolean;
}
const SignUpContainer = () => {
  const [userInfo, setUserInfo] = useState<SignUp>({
    email: '',
    nickName: '',
    password: '',
    repeatPassWord: '',
  });
  const [isShow, setIsShow] = useState<Show>({
    passShow: false,
    repeatShow: false,
  });
  const passwordHideHandler = () => {
    setIsShow({ ...isShow, passShow: !isShow.passShow });
  };
  const repeatPasswordHideHandler = () => {
    setIsShow({ ...isShow, repeatShow: !isShow.repeatShow });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email')
      setUserInfo({ ...userInfo, email: e.target.value });
    else if (e.target.name === 'nickName')
      setUserInfo({ ...userInfo, nickName: e.target.value });
    else if (e.target.name === 'password')
      setUserInfo({ ...userInfo, password: e.target.value });
    else if (e.target.name === 'repeatPassword')
      setUserInfo({ ...userInfo, repeatPassWord: e.target.value });
  };
  useEffect(() => {
    const email = document.querySelector<HTMLInputElement>('.emailInput');
    const error = document.querySelector<HTMLDivElement>('.emailError');
    email?.addEventListener('focusout', () => emailError(email, error));
    const passwordError = document.querySelector<HTMLDivElement>('.pwError');
    const passwordInput =
      document.querySelector<HTMLInputElement>('.passwordInput');
    passwordInput?.addEventListener('focusout', () =>
      pwError(passwordInput, passwordError)
    );
  }, []);
  return (
    <SignUpForm
      userInfo={userInfo}
      onChangeHandler={onChangeHandler}
      isShow={isShow}
      passwordHideHandler={passwordHideHandler}
      repeatPasswordHideHandler={repeatPasswordHideHandler}
    />
  );
};

export default SignUpContainer;

