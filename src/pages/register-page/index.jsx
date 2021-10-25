import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { CustomContainer } from "../../variables";
import { RegisterPageWrapper } from "./register-page-styles";

const RegisterPage = ({ setIsOpen }) => {
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);

  return (
    <RegisterPageWrapper>
      <Navbar setIsOpen={setIsOpen} isDark />
      <CustomContainer>
        <h1>Create an Account</h1>
        <form>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Your first name.."
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Your last name.."
          />

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

          <label htmlFor="password_confirm">Password Confirmation</label>
          <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            placeholder="Password Confirmation"
          />

          <input type="submit" value="Submit" />
          <div>
            Have an account?, <Link to="/login">Login</Link>{" "}
          </div>
        </form>
      </CustomContainer>
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
