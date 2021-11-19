import React, { FC } from "react";
import Image from "next/image";
import img1 from "../assets/image 2.png";
import img2 from "../assets/image 1.png";
import img3 from "../assets/image 3.png";

const WhyCat: FC = () => {
  return (
    <div className="flex w-10/12 mx-auto my-20 items-center justify-between">
      {/* text */}
      <div className="w-6/12">
        <div className="h-1 w-16 mb-6 bg-secendary"></div>
        <div className="text-7xl font-bold ">Why should you have a cat?</div>
        <p className="leading-8 text-3xl mt-12">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <div className="mt-12 font-bold cursor-pointer">READ MORE --{">"}</div>
      </div>
      {/* images */}
      <div className="flex gap-4 w-1/2 justify-end">
        <div className="items-end flex flex-col gap-4 w-1/2">
          <div className="w-10/12 h-auto">
            <Image layout="responsive" src={img1} />
          </div>
          <div className="w-7/12 h-auto">
            <Image layout="responsive" src={img2} />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-8/12 h-auto">
            <Image layout="responsive" src={img3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCat;
