import Navbar from "../../components/Navbar";
import { CustomContainer } from "../../variables";
import { RegisterPageWrapper } from "../register-page/register-page-styles";

const LoginPage = ({ setIsOpen }) => {
  return (
    <RegisterPageWrapper>
      <Navbar setIsOpen={setIsOpen} isDark />
      <CustomContainer>
        <h1>Sign in</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address.."
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />

          <input type="submit" value="Submit" />
        </form>
      </CustomContainer>
    </RegisterPageWrapper>
  );
};

export default LoginPage;
