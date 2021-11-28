import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColor = {
  fontColor: "black",
  bgColor: "white",
};

export const mainWeight = {
  titleWeight: 600,
};

export const moSize = {
  padding: "0 20px",
  titleSize: "45px",
  descSize: "16px",
  movieTitle: "14px",
};

export const GlobalStyled = createGlobalStyle`
  ${reset}

  *{
    text-decoration:none;
    box-sizing:border-box;
  }

  a{
    color:${mainColor.fontColor}
  }

  body{
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${mainColor.bgColor};
    letter-spacing: -1px;
    color: ${mainColor.fontColor};
  }

`;
