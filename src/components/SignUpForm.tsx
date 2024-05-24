import React, { ChangeEvent } from 'react';
import { Show, SignUp } from './SignUpContainer';
import '../style/signup.css';
import hideEyes from '../icon/hidePassword.png';
import openEyes from '../icon/openPassword.png';
import kakao from '../img/kakao.png';
import google from '../img/google.png';
import bigLogo from '../img/bigLogo.png';
import { Link } from 'react-router-dom';
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
    <div className='section'>
      <a className='logo' href='/'>
        <img src={bigLogo} />
      </a>
      <div className='signUpTable'>
        이메일
        <label className='emailLabel'>
          <input
            value={userInfo?.email}
            onChange={onChangeHandler}
            name='email'
            className='emailInput'
            title='이메일'
            placeholder='이메일을 입력해주세요'
            type='email'
          />
        </label>
        <div className='emailError'></div>
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
        <label className='passwordLabel'>
          <input
            value={userInfo?.password}
            name='password'
            onChange={onChangeHandler}
            className='passwordInput'
            type={isShow.passShow ? 'text' : 'password'}
            placeholder='비밀번호를 입력해주세요'
          />
          <img
            onClick={passwordHideHandler}
            id='eyeIcon'
            src={isShow.passShow ? openEyes : hideEyes}
            alt=''
          />
        </label>
        <div className='pwError'></div>
        비밀번호 확인
        <label className='passwordLabel'>
          <input
            name='repeatPassword'
            value={userInfo?.repeatPassWord}
            onChange={onChangeHandler}
            className='passwordInput2'
            type={isShow.repeatShow ? 'text' : 'password'}
            placeholder='비밀번호를 입력해주세요'
          />
          <img
            id='passIcon'
            onClick={repeatPasswordHideHandler}
            src={isShow.repeatShow ? openEyes : hideEyes}
            alt=''
          />
        </label>
        <div className='pwRepeatError'></div>
        <button className='signUpButton'>회원가입</button>
      </div>
      <div className='simpleLoginBox'>
        <p>간편로그인하기</p>
        <div className='simpleLoginIcons'>
          <a href='https://www.google.com/'>
            <img src={google} alt='구글' />
          </a>
          <a href='https://www.kakaocorp.com/page/'>
            <img src={kakao} alt='카카오' />
          </a>
        </div>
      </div>
      <p className='login'>
        이미 회원이신가요? <Link to={'/login'}>로그인</Link>
      </p>
    </div>
  );
};

export default SignUpForm;

