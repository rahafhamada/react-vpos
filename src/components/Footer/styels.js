import styled from "styled-components";
import { Link } from "react-scroll";
import { blackColor } from "../../variables";

export const FooterWrapper = styled.footer`
  margin-top: 30px;
  background-color: ${blackColor};
  padding: 50px 0;
`;

export const FooterRow = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkItem = styled(Link)`
  color: #c1c1c1;
  margin-bottom: 15px;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const ColumnTitle = styled.h3`
  color: #fff;
  margin-bottom: 20px;
`;
