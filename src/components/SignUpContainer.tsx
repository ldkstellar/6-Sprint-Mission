import React, { ChangeEvent, useEffect, useState } from 'react';
import SignUpForm from './SignUpForm';
import { emailError, pwError, isPassword } from '@/src/util/loginCheck';
import styles from '@/styles/signup.module.css';
import { postSignUp } from '../api/api';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';

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
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          alert(error.response.data.message);
        }
      }
    }
  };

  useEffect(() => {
    const onEmailFocus = document.querySelector(
      `.${styles.emailInput}`
    ) as HTMLInputElement;
    const emailErrorBox = document.querySelector(
      `.${styles.emailError}`
    ) as HTMLDivElement;

    onEmailFocus.addEventListener('focusout', () =>
      emailError(onEmailFocus, emailErrorBox)
    );

    const onPasswordFocus = document.querySelector(
      `.${styles.passwordInput}`
    ) as HTMLInputElement;
    const passwordErrorBox = document.querySelector(
      `.${styles.pwError}`
    ) as HTMLDivElement;

    const passwordRepeatFocus = document.querySelector(
      `.${styles.passwordRepeatInput}`
    ) as HTMLInputElement;
    const passwordRepeatErrorBox = document.querySelector(
      `.${styles.pwRepeatError}`
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

