import React from "react";
import Sidebar from "./Sidebar";

export interface IProps extends React.PropsWithChildren {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = (props: IProps) => {
  return <Sidebar {...props} />;
};

export default Navigation;
