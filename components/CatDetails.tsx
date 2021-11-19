import axios from "axios";
import React, { FC } from "react";
import { catData } from "../pages/breed/[id]";

const CatDetails: FC<{ data: catData }> = ({
  data: { catDetails, catImgs },
}) => {
  const catLevels = [
    { name: "Adaptability:", score: catDetails.adaptability },
    { name: "Affection level:", score: catDetails.affection_level },
    { name: "Child Friendly:", score: catDetails.child_friendly },
    { name: "Grooming:", score: catDetails.grooming },
    { name: "Intelligence:", score: catDetails.intelligence },
    { name: "Health issues:", score: catDetails.health_issues },
    { name: "Social needs:", score: catDetails.social_needs },
    { name: "Stranger friendly:", score: catDetails.stranger_friendly },
  ];
  console.log(catImgs);
  return (
    <div className="mb-40">
      <div className="flex justify-center w-full gap-24 mb-16">
        {/* image */}
        <div className="h-auto w-80">
          <img className="rounded-3xl h-auto w-full" src={catDetails.imgUrl} />
        </div>
        {/* details */}
        <div className="w-5/12 flex flex-col gap-6">
          <h1 className="font-bold text-4xl">{catDetails.name}</h1>
          <p>{catDetails.description}</p>
          <div className="font-bold">
            Temperament:{" "}
            <span className="font-normal">{catDetails.temperament}</span>
          </div>
          <div className="font-bold">
            Origin: <span className="font-normal">{catDetails.origin}</span>
          </div>
          <div className="font-bold">
            Life Span:{" "}
            <span className="font-normal">{catDetails.life_span} years</span>
          </div>
          {catLevels.map((lvl, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-10/12"
            >
              <div className="font-bold">{lvl.name}</div>
              <div className="flex gap-2">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`w-12 h-2.5 rounded-2xl ${
                        index < lvl.score
                          ? "bg-secendary"
                          : "bg-gray-400 opacity-50"
                      }`}
                    ></div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* other photos */}
      <h1 className="font-bold text-3xl mb-6 mt-20">Other photos</h1>
      <div className="grid grid-cols-4 gap-12 ">
        {catImgs.map((img, index) => (
          <img
            key={index}
            className="w-96 h-72 object-cover rounded-3xl"
            src={img.url}
            alt={img.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CatDetails;
