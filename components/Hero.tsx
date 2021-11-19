import React, { FC, useEffect, useState } from "react";
import HeroImg from "../assets/HeroImagelg.png";
import Logo from "../assets/CatwikiHero.svg";
import Image from "next/image";
import HeroTopCats, { Cat } from "./HeroTopCats";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

interface CatsSource {
  cats: Cat[];
  src: "top10" | "input" | "initial";
}

const Hero: FC<{ count: number; topCats: Cat[] }> = ({ count, topCats }) => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const [cats, setCats] = useState<CatsSource>({ cats: [], src: "initial" });
  const [closeSearch, setCloseSearch] = useState(true);

  useEffect(() => {
    if (value === "") return;
    axios
      .get(`http://localhost:4000/search/name/${value}`)
      .then((res: { data: Cat[] }) => {
        console.log(res.data);
        setCats({ src: "input", cats: res.data });
      });
  }, [value]);

  useEffect(() => {
    if (value === "" && focus === true) {
      if (cats && cats.src === "top10") return;
      axios
        .get(`http://localhost:4000/search/top?limit=10`)
        .then((res: { data: Cat[] }) => {
          console.log(res.data);
          setCats({ src: "top10", cats: res.data });
        });
    }
  }, [focus, value]);

  const goDetails = (cat: Cat) => {
    console.log("go");
    setFocus(false);
    router.push(`/breed/${cat.apiId}`);
  };

  return (
    <div className="rounded-3xl overflow-hidden">
      <div className="relative">
        <div className="w-120 p-4 absolute z-10 left-1/10 top-1/2 transform -translate-y-1/2">
          <div className="h-auto w-96 whiteSvg ">
            <Image layout="responsive" src={Logo} />
          </div>
          <p className="text-white mb-12 text-3xl">
            Get to know more about your cat breed
          </p>
          <div
            onBlur={() => {
              if (closeSearch) {
                setFocus(false);
              }
            }}
            className="flex flex-col items-center relative"
          >
            <input
              onFocus={(e) => setFocus(true)}
              className="outline-none  px-8 py-4 rounded-full w-full"
              type="text"
              placeholder="Enter your breed"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {focus ? (
              <div
                onMouseLeave={() => setCloseSearch(true)}
                onMouseOver={() => setCloseSearch(false)}
                className="absolute w-full transform translate-y-14 mt-2 p-2 bg-white flex max-h-60 rounded-3xl overflow-hidden"
              >
                <div className="bg-white overflow-y-scroll w-full p-4">
                  {cats.cats.length > 0
                    ? cats.cats.map((cat, index) => (
                        <div
                          onClick={() => goDetails(cat)}
                          key={index}
                          className="hover:bg-gray-200 cursor-pointer rounded-xl px-4 py-3"
                        >
                          {cat.name}
                        </div>
                      ))
                    : cats.src === "initial"
                    ? "loading..."
                    : "breed not found"}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full h-auto">
          <Image layout="responsive" src={HeroImg} />
        </div>
      </div>
      <div className="bg-primary font-Montserrat ">
        <div className="w-10/12 mx-auto">
          <div className="text-2xl py-4 font-medium">
            <span className="py-2 border-b-4 border-secendary ">Most S</span>
            earched Breeds
          </div>
          <div className="flex justify-between py-8">
            <div className="w-1/2 font-bold text-6xl">
              {count - 1}+ Breeds For you to discover
            </div>
            <div
              onClick={() => router.push("/top10")}
              className="flex items-end cursor-pointer"
            >
              see more {"-->"}
            </div>
          </div>
          <HeroTopCats topCats={topCats} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
