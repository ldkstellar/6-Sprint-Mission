import React, { ChangeEvent, useEffect, useState } from 'react';
import SignUpForm from './SignUpForm';
import { emailError, pwError, isPassword } from '@/src/util/loginCheck';
import style from '@/styles/signUp.module.css';
import { postSignUp } from '../api/api';
import { useRouter } from 'next/navigation';

export interface SignUp {
  email: string;
  nickName: string;
  password: string;
  repeatPassword: string;
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
    repeatPassword: '',
  });

  const [isShow, setIsShow] = useState<Show>({
    passShow: false,
    repeatShow: false,
  });

  const route = useRouter();

  const passwordHideHandler = () => {
    setIsShow({ ...isShow, passShow: !isShow.passShow });
  };

  const repeatPasswordHideHandler = () => {
    setIsShow({ ...isShow, repeatShow: !isShow.repeatShow });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  const serveSignUp = async () => {
    try {
      await postSignUp(
        userInfo.email,
        userInfo.nickName,
        userInfo.password,
        userInfo.repeatPassword
      );
      route.push('/login');
    } catch (error) {}
  };
  useEffect(() => {
    const onEmailFocus = document.querySelector(
      `.${style.emailInput}`
    ) as HTMLInputElement;
    const emailErrorBox = document.querySelector(
      `.${style.emailError}`
    ) as HTMLDivElement;

    onEmailFocus.addEventListener('focusout', () =>
      emailError(onEmailFocus, emailErrorBox)
    );

    const onPasswordFocus = document.querySelector(
      `.${style.passwordInput}`
    ) as HTMLInputElement;
    const passwordErrorBox = document.querySelector(
      `.${style.pwError}`
    ) as HTMLDivElement;

    const passwordRepeatFocus = document.querySelector(
      `.${style.passwordRepeatInput}`
    ) as HTMLInputElement;
    const passwordRepeatErrorBox = document.querySelector(
      `.${style.pwRepeatError}`
    ) as HTMLInputElement;

    onPasswordFocus.addEventListener('focusout', () =>
      pwError(onPasswordFocus, passwordErrorBox)
    );

    passwordRepeatFocus.addEventListener('focusout', () =>
      isPassword(onPasswordFocus, passwordRepeatFocus, passwordRepeatErrorBox)
    );

    return () => {
      onEmailFocus.removeEventListener('focusout', () =>
        emailError(onEmailFocus, emailErrorBox)
      );
      onPasswordFocus.removeEventListener('focusout', () =>
        isPassword(onPasswordFocus, passwordRepeatFocus, passwordRepeatErrorBox)
      );
      passwordRepeatFocus.removeEventListener('focusout', () =>
        isPassword(onPasswordFocus, passwordRepeatFocus, passwordRepeatErrorBox)
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
      serveSignUp={serveSignUp}
    />
  );
};

export default SignUpContainer;

