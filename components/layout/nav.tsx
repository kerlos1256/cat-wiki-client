import Image from "next/image";
import React, { FC } from "react";
import logo from "../../assets/CatwikiLogo.svg";

const Nav: FC = () => {
  return (
    <div className="py-4">
      <Image src={logo} />
    </div>
  );
};

export default Nav;
