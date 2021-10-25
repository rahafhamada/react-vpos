import { animateScroll as scroll } from "react-scroll";
import {
  Column,
  ColumnTitle,
  FooterRow,
  FooterWrapper,
  LinkItem,
} from "./styels";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterRow>
        <Column>
          <ColumnTitle>About Us</ColumnTitle>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Support Cener
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Customer Support
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            About Us
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Copyright
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Popular Campaign
          </LinkItem>
        </Column>
        <Column>
          <ColumnTitle>Our Information</ColumnTitle>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Return Policy
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Privacy Policy
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Terms & Conditions
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Site Map
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Store Hours
          </LinkItem>
        </Column>
        <Column>
          <ColumnTitle>My Account</ColumnTitle>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Press inquiries
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Social Media
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Directories
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Image & B-roll
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Permissions
          </LinkItem>
        </Column>
        <Column>
          <ColumnTitle>Policy</ColumnTitle>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Application Security
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Software principles
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Unwanted Software policy
          </LinkItem>
          <LinkItem
            to="/"
            onClick={() => scroll.scrollToTop()}
            smooth
            duration={500}
          >
            Responsible Supply Chain
          </LinkItem>
        </Column>
      </FooterRow>
    </FooterWrapper>
  );
};

export default Footer;
