import {
  ContentWrapper,
  HeroDesc,
  HeroSectionContainer,
  HeroText,
  VideoBG,
  VideoWrapper,
} from "./styles";
import Video from "./../../videos/video.mp4";
import CustomLink from "../CustomLink";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <VideoWrapper>
        <VideoBG autoPlay loop muted src={Video} type="video/mp4" />
      </VideoWrapper>
      <ContentWrapper>
        <HeroText>Great software is built with amazing developers</HeroText>
        <HeroDesc>
          We help build and manage a team of world-class developers to bring
          your vision to life, We believe it’s important for everyone to have
          access to software especially when it comes to digital learning be
          navigate.
        </HeroDesc>
        <CustomLink text="get started" target="about" />
      </ContentWrapper>
    </HeroSectionContainer>
  );
};

export default HeroSection;
