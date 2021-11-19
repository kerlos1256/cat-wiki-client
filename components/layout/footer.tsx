import React, { FC } from "react";
import Image from "next/image";
import logo from "../../assets/CatwikiHero.svg";

const Footer: FC = () => {
  return (
    <div className="bg-black w-full rounded-tl-xl rounded-tr-xl">
      <div className="w-10/12 flex justify-between items-center mx-auto">
        <div className="w-32 py-4 h-auto">
          <Image layout="responsive" src={logo} />
        </div>
        <div className="text-gray-500">
          created by <span className="text-white font-semibold">Remix1256</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
