import { MdClose } from "react-icons/md";
import {
  BtnWrapper,
  CloseIcon,
  LinkItem,
  LinksWrapper,
  SidebarWrapper,
  SignupLink,
} from "./styles";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <CloseIcon>
        <MdClose onClick={() => setIsOpen(!isOpen)} />
      </CloseIcon>
      <LinksWrapper>
        <LinkItem
          to="boost"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Boost
        </LinkItem>
        <LinkItem
          to="support"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Support
        </LinkItem>
        <LinkItem
          to="features"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Features
        </LinkItem>
        <LinkItem
          to="payment"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Payment
        </LinkItem>
        <LinkItem
          to="jackpots"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Jackpots
        </LinkItem>
        <LinkItem
          to="performance"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Performance
        </LinkItem>
      </LinksWrapper>
      <BtnWrapper>
        <SignupLink to="/signup">Sign up</SignupLink>
      </BtnWrapper>
    </SidebarWrapper>
  );
};

export default SideBar;
