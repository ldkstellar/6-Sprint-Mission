import React from 'react';
import type { AppProps } from 'next/app';
import Header from '@/src/components/Header';
import '../styles/Reset.css';
import Cookies from 'js-cookie';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

