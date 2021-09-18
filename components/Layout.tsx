import Head from 'next/head';
import React, { FC } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Star Wars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
