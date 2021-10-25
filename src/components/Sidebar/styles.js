import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { main, screenLg, secondColor } from "../../variables";

export const SidebarWrapper = styled.aside`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.7s all ease-in-out;
  text-align: center;

  @media screen and (min-width: ${screenLg}) {
    display: none !important;
  }
`;

export const CloseIcon = styled.div`
  svg {
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LinkItem = styled(ScrollLink)`
  color: #fff;
  margin-bottom: 30px;
  font-size: 1.2rem;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${main};
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 30px;
`;

export const SignupLink = styled(ScrollLink)`
  text-decoration: none;
  text-transform: uppercase;
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
`;
