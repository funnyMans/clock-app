import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

interface IProps extends React.PropsWithChildren {}

const AppWrapper = ({ children }: IProps) => {
  const [show, setShow] = useState(true);
  return (
    <div className='w-full h-fit'>
      <Header show={show} setShow={setShow} />
      <div className='flex w-full h-fit max-sm:flex-col'>
        <Navigation show={show} setShow={setShow} />
        <MainContent show={show}>{children}</MainContent>
      </div>
      <Footer />
    </div>
  );
};
export default AppWrapper;
