import React, { useContext, useEffect, useState } from 'react';
import style from '../../styles/Header.module.css';
import logo from '../img/panda.png';
import profile from '../img/profile.png';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface headerProps {
  children: React.ReactNode;
}

const Header = ({ children }: headerProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const route = useRouter();
  useEffect(() => {
    // 쿠키에서 토큰을 가져옴
    const token = Cookies.get('accessToken');

    // 토큰이 있으면 로그인 상태로 설정
    if (token) {
      console.log('test');

      setIsLoggedIn(true);
    }
  }, [route.pathname]);
  return (
    <>
      <div className={style['nav']}>
        <div className={style['leftBtn']}>
          <Link href={'/'}>
            <img className='logo' src={logo.src} alt='로고' />
          </Link>
          <p>자유게시판</p>
          <p id='presentPage'>중고마켓</p>
        </div>
        <div className={style['rightBtn']}>
          {isLoggedIn ? (
            <button>
              <img src={profile.src} alt='profile'></img>
            </button>
          ) : (
            <Link href={'/login'} className={style['loginBtn']}>
              로그인
            </Link>
          )}
        </div>
      </div>
      {children}
    </>
  );
};

export default Header;

