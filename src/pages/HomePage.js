import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ReuslableSection from "../components/ReusableSection";
import {
  AboutSection,
  DiscoverSection,
  homeSectionOne,
  servicesSection,
} from "../components/sectionData";
import Navbar from "./../components/Navbar";

const HomePage = ({ setIsOpen }) => {
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <HeroSection />
      <ReuslableSection {...homeSectionOne} />
      <ReuslableSection {...servicesSection} />
      <ReuslableSection {...DiscoverSection} />
      <ReuslableSection {...AboutSection} />
    </div>
  );
};

export default HomePage;
