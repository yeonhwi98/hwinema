import { Link } from "react-router-dom";
import { router } from "../router";
import styled from "styled-components";
import { useState } from "react";
import { moSize } from "../Style/GlobalStyled";

const SHeader = styled.header`
  width: 100%;
  height: 100px;
  position: ${(props) => props.fixed};
  top: 0;
  left: 0;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: 0.5s;
  z-index: 100;
  @media screen and (max-width: 500px) {
    padding: ${moSize.padding};
  }
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 600;
  a {
    color: white;
  }
  letter-spacing: 5px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const MenuWrap = styled.div`
  font-size: 20px;
  font-weight: 200;
  display: flex;

  a {
    color: white;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    display: none;
  }
`;
const Menu = styled.div`
  display: flex;
  margin-right: 90px;
  letter-spacing: 2px;
  @media screen and (max-width: 500px) {
  }
`;
const Hamburger = styled.div`
  font-size: 40px;
  cursor: pointer;
  color: white;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const Header = () => {
  const [bg, setBg] = useState();
  const [fix, setFix] = useState();

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (sct >= 400) {
      setBg("rgba(0,0,0,0.7)");
      setFix("fixed");
    } else {
      setBg("rgba(225,225,225,0.7)");
      setFix("absolute");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader bgColor={bg} fixed={fix}>
      <Logo>
        <Link to={router.home}>HWINEMA START</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to={router.detail}>About</Link>
        </Menu>
        <Menu>
          <Link to={router.contact}>Contacts</Link>
        </Menu>
        <Menu>
          <Link to={router.search}>Search</Link>
        </Menu>
      </MenuWrap>
      <Hamburger>=</Hamburger>
    </SHeader>
  );
};
