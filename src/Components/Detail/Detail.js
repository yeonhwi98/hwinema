import { PageTitle } from "../../PageTitle";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { movieApi } from "../../api";
import { useParams } from "react-router-dom";
import { PageNotfound } from "../../PageNotFound";
import { Loader } from "../Loader";
import { Container } from "../Container";
import { mainWeight } from "../../Style/GlobalStyled";
import { mainColor } from "../../Style/GlobalStyled";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  background-size: cover;
  background-position: center;
`;
const CoverImg = styled.div`
  width: 100%;
`;
const ConWrap = styled.div`
  width: 50%;
  margin-left: 50px;
  float: left;
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: 600;
  /* margin-bottom: 30px; */
  margin-top: 250px;
  color: white;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
`;
const Desc = styled.div`
  width: 90%;
  font-size: 18px;
  margin-top: 100px;
  font-weight: 500;
  color: white;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  line-height: 2rem;
  opacity: 0.9;
`;
const Button = styled.button`
  all: unset;
  font-weight: ${mainWeight.titleWeight};
  margin-top: 80px;
  cursor: pointer;
  transition: 0.2s;
  color: ${mainColor.bgColor};
  display: flex;
  div {
    font-size: 20px;
    margin-left: 20px;
    transition: 0.6s;

    &:hover {
      transform: translateX(10px);
    }
  }

  @media screen and (max-width: 500px) {
    padding: 15px 40px;
  }
`;
const TextWrap = styled.div`
  width: 30%;
  height: 100%;
  float: right;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 95vh;
  border-left: 1.5px solid white;
`;
const Contents = styled.div`
  margin-top: 130px;
  margin-left: 50px;
  color: ${mainColor.bgColor};
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  font-weight: 300;
  font-size: 20px;

  h1 {
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  const [errorPage, setErrorPage] = useState(false);

  useEffect(() => {
    const MovieDetail = async () => {
      try {
        const { data } = await movieApi.detail(id);
        setMovieData(data);

        setLoading(false);
      } catch (error) {
        setErrorPage(true);
      }
    };
    MovieDetail();
  }, [id]);

  console.log(movieData);

  return (
    <div>
      {errorPage ? (
        <PageNotfound></PageNotfound>
      ) : (
        <>
          {loading ? (
            <Loader></Loader>
          ) : (
            <div>
              {movieData && (
                <>
                  <PageTitle title="영화리뷰">Detail</PageTitle>

                  <Wrap
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
                    }}
                  >
                    <Container>
                      <CoverImg>
                        <ConWrap>
                          <Title>{movieData.title}</Title>
                          <Desc>
                            {movieData.overview.slice(0, 300) + "..."}
                          </Desc>
                          <Button>
                            더 보기
                            <div>&rarr;</div>
                          </Button>
                        </ConWrap>
                        <TextWrap>
                          <ContentWrap>
                            <Contents>
                              <h1>RUNTIME</h1>
                              {movieData.runtime}분
                            </Contents>
                            <Contents>
                              <h1>GENRE</h1>

                              {movieData.genres.map(
                                (genre) => genre.name + ","
                              )}
                            </Contents>
                            <Contents>
                              <h1>RELEASE DATE</h1>

                              {movieData.release_date}
                            </Contents>
                          </ContentWrap>
                        </TextWrap>
                      </CoverImg>
                    </Container>
                  </Wrap>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};