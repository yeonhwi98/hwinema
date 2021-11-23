import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const mainFontColor = {
  fontColor: "white",
};

const mainBgColor = {
  bgColor: "#103952",
};

export const GlobalStyled = createGlobalStyle`
  ${reset}

  *{
    text-decoration:none;
    box-sizing:border-box;
  }

  body{
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${mainBgColor.bgColor};
    letter-spacing: -1px;
    color: ${mainFontColor.fontColor};
  }

`;
