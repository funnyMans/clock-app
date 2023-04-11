import React from "react";

export interface IProps extends React.PropsWithChildren {
  show: boolean;
}

const MainContent = ({ show, children }: IProps) => {
  return (
    <div
      className={`${
        show ? "translate-x-0 " : "-translate-x-64"
      } xl:rounded-l transform ease-in-out transition duration-700 flex justify-center items-center flex-col w-full h-full`}
    >
      {children}
    </div>
  );
};

export default MainContent;
