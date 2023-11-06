import React from "react";
import {
  MdErrorOutline,
  MdOutlineCheckCircleOutline,
  MdOutlineCancel,
} from "react-icons/md";
import { HeaderIcon as HeaderIconType } from "../types";

export interface HeaderIconProps {
  iconType: HeaderIconType;
}

const HeaderIcon: React.FC<HeaderIconProps> = ({ iconType }) => {
  const currentIcon =
    iconType === HeaderIconType.WARNING ? (
      <MdErrorOutline />
    ) : iconType === HeaderIconType.ERROR ? (
      <MdOutlineCancel />
    ) : (
      <MdOutlineCheckCircleOutline />
    );

  return <>{currentIcon}</>;
};

export default HeaderIcon;
