import Logo from "../../assets/images/logo.png";
import { NavEl } from "./styles";

const Navbar = () => {
  return (
    <NavEl>
      <img src={Logo} alt="" />
    </NavEl>
  );
};

export default Navbar;
