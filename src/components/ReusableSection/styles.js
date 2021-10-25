import styled from "styled-components";
import { blackColor, screenLg } from "../../variables";

export const ReusableSectionWrap = styled.section`
  padding: 100px 0;
  background-color: ${({ isDark }) => (isDark ? blackColor : "#fff")};
`;

export const ContentWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ imgFirst }) => (imgFirst ? "row-reverse" : "row")};
  gap: 40px;

  @media screen and (max-width: ${screenLg}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const LeftColumn = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const RightColumn = styled.div`
  flex: 1;
  color: #fff;
`;

export const HeadTitle = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ headTitleDark }) => (headTitleDark ? blackColor : "#fff")};
`;
export const SectionDesc = styled.p`
  color: #fff;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ descDark }) => (descDark ? blackColor : "#fff")};
`;

export const SectionImage = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${screenLg}) {
    max-width: 500px;
    max-height: 500px;
  }
`;
