import styled from "styled-components";
import { screenLg, screenMd } from "../../variables";

export const HeroSectionContainer = styled.div`
  height: 700px;
  overflow: hidden;
  position: relative;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
`;

export const VideoWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroText = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: ${screenMd}) {
    font-size: 1rem !important;
  }

  @media screen and (max-width: ${screenLg}) {
    font-size: 2rem !important;
  }
`;

export const HeroDesc = styled.p`
  font-size: 0.8rem;
  line-height: 1.7;
`;
