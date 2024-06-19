import React, { ChangeEvent } from 'react';
import { Show, SignUp } from './SignUpContainer';
import styles from '@/styles/signup.module.css';
import hideEyes from '@/src/img/hidePassword.png';
import openEyes from '@/src/img/openPassword.png';
import kakao from '@/src/img/kakao.png';
import google from '@/src/img/google.png';
import bigLogo from '@/src/img/bigLogo.png';
import Link from 'next/link';

interface SignUpInfo {
  userInfo?: SignUp;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface EyesButton {
  isShow: Show;
  passwordHideHandler: () => void;
  repeatPasswordHideHandler: () => void;
}

const SignUpForm = ({
  userInfo,
  onChangeHandler,
  isShow,
  passwordHideHandler,
  repeatPasswordHideHandler,
}: SignUpInfo & EyesButton) => {
  return (
    <div className={styles['section']}>
      <Link className={styles['logo']} href='/main'>
        <img src={bigLogo.src} />
      </Link>
      <div className={styles['signUpTable']}>
        이메일
        <label className={styles['emailLabel']}>
          <input
            value={userInfo?.email}
            onChange={onChangeHandler}
            name='email'
            className={`${styles['emailInput']} ${styles['inputContainer']}`}
            title='이메일'
            placeholder='이메일을 입력해주세요'
            type='email'
          />
        </label>
        <div className={styles['emailError']}></div>
        닉네임
        <label>
          <input
            value={userInfo?.nickName}
            onChange={onChangeHandler}
            name='nickName'
            id='shown'
            type='text'
            placeholder='닉네임을 입력해주세요'
          />
        </label>
        비밀번호
        <label className={styles['passwordLabel']}>
          <input
            value={userInfo?.password}
            name='password'
            onChange={onChangeHandler}
            className={styles['passwordInput']}
            type={isShow.passShow ? 'text' : 'password'}
            placeholder='비밀번호를 입력해주세요'
          />
          <img
            onClick={passwordHideHandler}
            id='eyeIcon'
            src={isShow.passShow ? openEyes.src : hideEyes.src}
            alt=''
          />
        </label>
        <div className={styles['pwError']}></div>
        비밀번호 확인
        <label className={styles['passwordLabel']}>
          <input
            name='repeatPassword'
            value={userInfo?.repeatPassWord}
            onChange={onChangeHandler}
            className={styles['passwordRepeatInput']}
            type={isShow.repeatShow ? 'text' : 'password'}
            placeholder='비밀번호를 입력해주세요'
          />
          <img
            id={'passIcon'}
            onClick={repeatPasswordHideHandler}
            src={isShow.repeatShow ? openEyes.src : hideEyes.src}
            alt='눈알'
          />
        </label>
        <div className={styles['pwRepeatError']}></div>
        <button className={styles['signUpButton']}>회원가입</button>
      </div>
      <div className={styles['simpleLoginBox']}>
        <p>간편로그인하기</p>
        <div className={styles['simpleLoginIcons']}>
          <a href='https://www.google.com/'>
            <img src={google.src} alt='구글' />
          </a>
          <a href='https://www.kakaocorp.com/page/'>
            <img src={kakao.src} alt='카카오' />
          </a>
        </div>
      </div>
      <p className={styles['login']}>
        이미 회원이신가요? <Link href={'/login'}>로그인</Link>
      </p>
    </div>
  );
};

export default SignUpForm;

