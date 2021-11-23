import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Loader } from "../Loader";
import { MainBanner } from "./MainBanner";

const Wrap = styled.div`
  /* height: 400vh; */
`;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [upComming, setUpComming] = useState();
  const [loading, setLoading] = useState(true);

  const movieNum = 2;

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        setNowPlay(nowPlaying);

        const {
          data: { results: upComming },
        } = await movieApi.upComming();
        setUpComming(upComming);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log(nowPlay);
  console.log(upComming);
  console.log(loading);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Wrap>{nowPlay && <MainBanner data={nowPlay} num={movieNum} />}</Wrap>
      )}
    </>
  );
};
