import axios from "axios";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { Cat } from "../components/HeroTopCats";

const top10: FC<{ cats: Cat[] }> = ({ cats }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Top 10 most searched breeds</h1>
      <div className="flex flex-col gap-12 my-12">
        {cats.map((cat, index) => (
          <div key={index} className="flex gap-8">
            <img
              className="rounded-3xl w-56 h-auto object-cover"
              src={cat.imgUrl}
              alt={cat.name}
            />
            <div>
              <div className="font-bold text-3xl">
                {index + 1}. {cat.name}
              </div>
              <div className="font-bold my-8">{cat.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`http://localhost:4000/search/top?limit=10`);

  return {
    props: {
      cats: res.data,
    },
  };
};
export default top10;
