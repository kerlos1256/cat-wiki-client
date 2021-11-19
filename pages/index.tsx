import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Hero from "../components/Hero";
import { Cat } from "../components/HeroTopCats";
import Footer from "../components/layout/footer";
import WhyCat from "../components/WhyCat";

const Home: NextPage<{ count: number; topCats: Cat[] }> = ({
  count,
  topCats,
}) => {
  return (
    <div className="">
      <Hero count={count} topCats={topCats} />
      <WhyCat />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:4000/count");
  const cats = await axios.get(`http://localhost:4000/search/top?limit=4`);

  return {
    props: { count: res.data, topCats: cats.data },
  };
};
export default Home;
