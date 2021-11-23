import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColor = {
  fontColor: "white",
  bgColor: "#1d1d1d",
};

export const mainWeight = {
  titleWeight: 600,
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
