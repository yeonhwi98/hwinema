import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";
import { mainWeight, moSize } from "../../Style/GlobalStyled";
import "../../Style/swiper.css";
import { Link } from "react-router-dom";
import SwiperCore from "swiper";

const Title = styled.h3`
  font-size: 65px;
  font-weight: ${mainWeight.titleWeight};
  margin: 100px 0 70px 0;
  letter-spacing: 2px;
  opacity: 0.8;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
    margin-top: 50px;
  }
`;

const CoverImg = styled.div`
  height: 480px;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  @media screen and (max-width: 500px) {
    height: 120px;
  }
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 15px;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const MovieSubTitle = styled.div`
  margin-top: 10px;
  opacity: 0.7;
  font-size: 14px;
`;

SwiperCore.use([Navigation]);

export const Movies = ({ movieData, title }) => {
  const params = {
    breakpoints: {
      1024: {
        slidesPerView: 5.1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <>
      <Title>{title}</Title>
      <Swiper
        module={[Navigation]}
        {...params}
        slidesPerView={6}
        spaceBetween={20}
        navigation
      >
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to="#">
              <CoverImg
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${play.backdrop_path})`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
              <MovieSubTitle>{play.original_title}</MovieSubTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
