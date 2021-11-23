import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";

const Wrap = styled.div`
  height: 400vh;
`;

export const Home = () => {
  const [re, setRe] = useState();

  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results },
      } = await movieApi.nowPlaying();
      setRe(results);
    };
    movieData();
  }, []);

  console.log(re);

  return <Wrap>Home</Wrap>;
};
