import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 180px;
  height: 100%;
  padding: 1rem 1rem 0 0;
  height: 100vh;
  background-color: #1635fc;
  transition: 0.5s;
  z-index: 100;

  @media only screen and (max-width: 600px) {
    padding: 1rem 1rem 0 0;
    background-color: #1635fc;
    width: 68px;
  }
`;

const SidebarMenuContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const StyledNavLink = styled(Link)`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 1rem;
  padding: 1rem 0 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
  border-left-style: solid;
  border-left-width: 2px;
  border-color: white;
  i {
    font-size: 1.25rem;
    color: white;
  }

  span {
    color: white;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &:hover {
    opacity: 100%;
  }
  &:hover {
    text-decoration: underline;
  }
  &[aria-current] {
    color: red;
  }
`;

const LogoContainer = styled(StyledNavLink)`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  opacity: 100%;
  text-decoration: none;
  padding-bottom: 2rem;
  margin: -7px;
  margin-left: 0px;
  border-style: ${({ act }) => (!act ? 'solid' : 'none')};

  i:hover {
    margin-left: -7px;
    transition: 0.1s;
    font-size: 2rem;
  }
  i {
    font-size: 2rem;
    margin-left: -7px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  @media only screen and (max-width: 600px) {
    margin: -3px;
    margin-left: 0px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export { SidebarContainer, SidebarMenuContainer, StyledNavLink, LogoContainer };
