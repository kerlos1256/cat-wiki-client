import axios from "axios";
import React, { FC } from "react";

export interface Cat {
  id: number;
  apiId: string;
  name: string;
  desc: string;
  imgUrl: string;
  searched: number;
}

const HeroTopCats: FC<{ topCats: Cat[] }> = ({ topCats }) => {
  return (
    <div className="grid grid-cols-4 gap-12 pb-12">
      {topCats.map((cat, index) => (
        <div key={index}>
          <div className="relative h-48 w-full">
            {index === 0 ? (
              <div className="w-6 h-4/5 rounded-xl bg-zaity absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
            ) : (
              ""
            )}
            <img
              className="rounded-3xl w-full h-full object-cover absolute z-10"
              src={cat.imgUrl}
            />
          </div>
          <div className="font-bold py-4">{cat.name}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroTopCats;
