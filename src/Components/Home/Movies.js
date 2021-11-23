import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";
import { mainWeight } from "../../Style/GlobalStyled";
import "../../Style/swiper.css";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 65px;
  font-weight: ${mainWeight.titleWeight};
  margin: 100px 0 70px 0;
  letter-spacing: 2px;
  opacity: 0.8;
`;

const CoverImg = styled.div`
  height: 480px;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 15px;
`;

const MovieSubTitle = styled.div`
  margin-top: 10px;
  opacity: 0.7;
  font-size: 14px;
`;

export const Movies = ({ movieData, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Swiper
        module={[Navigation]}
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
