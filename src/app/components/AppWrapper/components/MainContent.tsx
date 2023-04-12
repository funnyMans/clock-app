import React from 'react';

export interface IProps extends React.PropsWithChildren {
  show: boolean;
}

const MainContent = ({ show, children }: IProps) => {
  return (
    <div
      className={`w-3/4 max-sm:w-full flex p-5  ${
        show ? 'max-sm:translate-y-0' : '-translate-y-full'
      } transform ease-in-out transition duration-700`}
    >
      {children}
    </div>
  );
};

export default MainContent;
