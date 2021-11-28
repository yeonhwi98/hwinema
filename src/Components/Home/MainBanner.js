import styled from "styled-components";
import { mainWeight, moSize } from "../../Style/GlobalStyled";

const SMainBanner = styled.div`
  height: 90vh;
  padding: 400px 80px;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 500px) {
    padding: 220px 20px;
  }
`;
const Title = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  font-size: 100px;
  font-weight: ${mainWeight.titleWeight};
  margin-bottom: 20px;
  color: white;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 500px) {
    font-size: ${moSize.titleSize};
    margin-top: 200px;
  }
`;
const Desc = styled.p`
  /* max-width: 1200px; */
  text-align: center;
  margin: 0 auto;
  width: 100%;
  font-size: 40px;
  opacity: 0.8;
  color: white;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  letter-spacing: 4px;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

export const MainBanner = ({ data, num }) => {
  return (
    <SMainBanner
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          data[`${num}`].backdrop_path
        }) `,
      }}
    >
      <Title>{data[`${num}`].title}</Title>
      <Desc>{data[`${num}`].original_title}</Desc>
    </SMainBanner>
  );
};
