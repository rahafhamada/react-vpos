import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import {
  secondColor,
  screenMd,
  screenSm,
  main,
  blackColor,
} from "../../variables";

const linkStyleBase = css`
  text-decoration: none;
  text-transform: uppercase;
`;

export const NavEl = styled.nav`
  background-color: ${({ isScollable }) =>
    isScollable ? blackColor : "transparent"};
  padding: 15px 0;
  color: #fff;
  position: ${({ isScollable }) => (isScollable ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: ${screenMd}) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const NavLogo = styled(RouterLink)`
  color: #fff;
  ${linkStyleBase};
  font-weight: bold;
  letter-spacing: 4px;
  cursor: pointer;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  &.active {
    border-bottom: 1px solid red;
  }

  @media screen and (max-width: ${screenSm}) {
    display: none;
  }
`;

export const NavItem = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.5s ease-in-out;

  .active {
    border-bottom: 1px solid red;
  }

  &:hover {
    color: ${main};
  }
`;

export const SignUpLink = styled(RouterLink)`
  ${linkStyleBase};
  color: #fff;
  background-color: #ff006e;
  padding: 10px 30px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
  transition: 0.5s ease;

  &:hover {
    background-color: ${secondColor};
  }

  @media screen and (max-width: ${screenSm}) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: ${screenSm}) {
    display: block;
  }
`;
