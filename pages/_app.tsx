import React from 'react';
import type { AppProps } from 'next/app';
import Header from '@/src/components/Header';
import '../styles/Reset.css';

export default function App({ Component, pageProps }: AppProps) {
  console.log(process.env.API);

  return (
    <Header isLogin={false}>
      <Component {...pageProps} />
    </Header>
  );
}

