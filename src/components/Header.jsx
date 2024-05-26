import React, { useContext } from 'react';
import '../style/Header.css';
import { LoginContext } from '../context/LoginContext';
import logo from '../img/panda.png';
import profile from '../img/profile.png';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const isLogin = useContext(LoginContext);
  const navigation = useNavigate();

  return (
    <div className='nav'>
      <div className='leftBtn'>
        <img className='logo' src={logo} />
        <p>자유게시판</p>
        <p id='presentPage'>중고마켓</p>
      </div>
      <div className='rightBtn'>
        {isLogin ? (
          <button>
            <img src={profile} alt='profile'></img>
          </button>
        ) : (
          <button className='loginBtn' onClick={() => navigation('/login')}>
            로그인
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

