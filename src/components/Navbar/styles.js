import styled from "styled-components";
import { screenMd } from "../../variables";

export const NavEl = styled.nav`
  background-color: #000;
  padding: 10px 0 25px 0;
  color: #fff;
  width: 100%;
  z-index: 999;
  transition: all 0.4s ease-in-out;
  margin-bottom: 50px;

  img {
    width: 150px;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
    display: block;
  }

  @media screen and (max-width: ${screenMd}) {
    transition: 0.8s all ease;
  }
`;
