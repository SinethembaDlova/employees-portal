import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 180px;
  width: 100%;
  height: 60px;
  background-color: #ffffffffffff;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-weight: bold;
  border-radius: 2px;
  @media (max-width: 600px) {
    height: 65px;
    left: 68px;
  }
`;

const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  padding-left: 5%;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export { NavbarContainer, LeftContainer, NavbarInnerContainer, NavbarLink };
