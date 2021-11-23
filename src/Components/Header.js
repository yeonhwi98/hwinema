import { Link } from "react-router-dom";
import { router } from "../router";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 600;
  a {
    color: white;
  }
  letter-spacing: 5px;
`;
const MenuWrap = styled.div`
  font-size: 20px;
  font-weight: 200;
  display: flex;
  /* margin-right: 500px; */

  a {
    color: white;
  }
`;
const Menu = styled.div`
  display: flex;
  margin-right: 90px;
  letter-spacing: 2px;
`;
const Hamburger = styled.div`
  font-size: 40px;
  cursor: pointer;
`;

export const Header = () => {
  return (
    <SHeader>
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
