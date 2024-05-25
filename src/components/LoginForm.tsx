import React from 'react';
import '../style/Login.css';
import bigLogo from '../img/bigLogo.png';
import kakaoImage from '../img/kakao.png';
import googleImage from '../img/google.png';
import openPassword from '../icon/openPassword.png';
import hidePassword from '../icon/hidePassword.png';
import { OnChange, onClick } from './LoginFormContainer';
import { Link } from 'react-router-dom';
interface Login {
  email: string;
  password: string;
  onChangePassword: OnChange;
  onChangeEmail: OnChange;
}
interface isHide {
  isOpen: boolean;
  onClick: onClick;
}
const LoginForm = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  isOpen,
  onClick,
}: Login & isHide) => {
  return (
    <>
      <div className='section'>
        <Link className='homeBtn' to={'/main'}>
          <img src={bigLogo} />
        </Link>
        <div className='loginBox'>
          이메일
          <label className='emailLabel'>
            <input
              value={email}
              onChange={onChangeEmail}
              className='emailInput'
              title='이메일'
              placeholder='이메일을 입력해주세요'
            />
          </label>
          <div className='email-error-message'></div>
          비밀번호
          <label className='passwordLabel'>
            <input
              value={password}
              onChange={onChangePassword}
              className='passwordBar'
              title='비밀번호'
              type={isOpen ? 'text' : 'password'}
              placeholder='비밀번호를 입력해주세요'
            />

            <img
              onClick={onClick}
              id='eyeIcon'
              src={isOpen ? openPassword : hidePassword}
              alt='closeEyes'
            />
          </label>
          <div className='pw-error-message'></div>
        </div>

        <button className='loginButton'>로그인</button>
        <div className='simpleLoginBox'>
          <p>간편 로그인 하기</p>
          <div className='simpleLoginIcons'>
            <Link to='https://www.google.com/'>
              <img src={googleImage} alt='구글' />
            </Link>
            <Link to='https://www.kakaocorp.com/page/'>
              <img src={kakaoImage} alt='카카오' />
            </Link>
          </div>
        </div>
      </div>
      <div className='signUp'>
        판다 마켓이 처음이신가요? <Link to='/signUp'>회원가입</Link>
      </div>
    </>
  );
};

export default LoginForm;

