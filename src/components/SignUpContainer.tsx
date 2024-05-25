import React, { ChangeEvent, useEffect, useState } from 'react';
import SignUpForm from './SignUpForm';
import { emailError, pwError, isPassword } from '../util/loginCheck';
import style from '../style/signup.module.css';

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
    const email = document.querySelector(
      `.${style.emailInput}`
    ) as HTMLInputElement;
    const emailErrorBox = document.querySelector(
      `.${style.emailError}`
    ) as HTMLDivElement;

    email.addEventListener('focusout', () => emailError(email, emailErrorBox));

    const passwordInput = document.querySelector(
      `.${style.passwordInput}`
    ) as HTMLInputElement;
    const passwordErrorBox = document.querySelector(
      `.${style.pwError}`
    ) as HTMLDivElement;

    const passwordRepeatInput = document.querySelector(
      `.${style.passwordRepeatInput}`
    ) as HTMLInputElement;
    const passwordRepeatErrorBox = document.querySelector(
      `.${style.pwRepeatError}`
    ) as HTMLInputElement;

    passwordInput.addEventListener('focusout', () =>
      pwError(passwordInput, passwordErrorBox)
    );

    passwordRepeatInput.addEventListener('focusout', () =>
      isPassword(passwordInput, passwordRepeatInput, passwordRepeatErrorBox)
    );

    return () => {
      email.removeEventListener('focusout', () =>
        emailError(email, emailErrorBox)
      );
      passwordInput.removeEventListener('focusout', () =>
        isPassword(passwordInput, passwordRepeatInput, passwordRepeatErrorBox)
      );
      passwordRepeatInput.removeEventListener('focusout', () =>
        isPassword(passwordInput, passwordRepeatInput, passwordRepeatErrorBox)
      );
    };
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

