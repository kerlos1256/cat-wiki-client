import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import CatDetails from "../../components/CatDetails";

export interface CatDetailsType {
  id: string;
  name: string;
  imgUrl: string;
  temperament: string;
  origin: string;
  description: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
}
export interface img {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface catData {
  catDetails: CatDetailsType;
  catImgs: img[];
}

const breed: NextPage<{ data: catData }> = ({ data }) => {
  return <CatDetails data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await axios.get(`http://localhost:4000/search/${id}`);
  const imgsRes = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&include_breeds=false&limit=8`
  );
  return {
    props: {
      data: { catDetails: res.data, catImgs: imgsRes.data },
    },
  };
};

export default breed;
