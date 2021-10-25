import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import {
  NavItem,
  LinksWrapper,
  NavLogo,
  NavContainer,
  NavEl,
  SignUpLink,
  MenuIcon,
} from "./styles";

const Navbar = ({ setIsOpen, isDark }) => {
  const [isScollable, setIsScrollable] = useState(isDark);
  const { cartItems } = useSelector(({ cart }) => cart);

  const onChangeScroll = () => {
    if (isDark) return;
    if (window.scrollY >= 100) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onChangeScroll);
  });

  return (
    <NavEl isScollable={isScollable}>
      <NavContainer>
        <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
          Logo
        </NavLogo>
        <LinksWrapper>
          <NavItem to="/shop">Shop</NavItem>
          <NavItem to="/cart">Cart({cartItems?.length})</NavItem>
        </LinksWrapper>
        <SignUpLink to="/register">Sign Up</SignUpLink>
        <MenuIcon>
          <FiMenu onClick={() => setIsOpen(true)} />
        </MenuIcon>
      </NavContainer>
    </NavEl>
  );
};

export default Navbar;
