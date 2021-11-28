import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 50px;
    color: black;
    margin-top: 50px;
  }

  h2 {
    margin-top: 50px;
    font-size: 100px;
    font-weight: 900;
  }
  i {
    font-size: 25px;
    float: left;
    margin-top: 50px;
    opacity: 0.7;
  }
`;

const Button = styled.div`
  all: unset;
  width: 200px;
  height: 50px;
  border: 1px solid skyblue;
  border-radius: 10px;
  margin-top: 50px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: skyblue;
    text-decoration: underline;
    line-height: 50px;
    &:hover {
      color: black;
    }
  }
`;

export const PageNotfound = () => {
  return (
    <Wrap>
      <h3>
        <FontAwesomeIcon icon={"sad-tear"}></FontAwesomeIcon>
      </h3>
      <h2>404</h2>
      <i>Got lost ?? how ?? why ?? ohhhh,,,</i>
      <Button>
        <Link to="/">Take me Home</Link>
      </Button>
    </Wrap>
  );
};
