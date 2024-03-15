import Header from "./Header";
import Hero from "./Hero";
import PropTypes from "prop-types";

// import { MdButton, SmButton } from "./Buttons";
const Login = ({ page }) => {
  return (
    <>
      <Header></Header>
      <Hero page={page}></Hero>
    </>
  );
};

Login.propTypes = {
  page: PropTypes.string,
};

export default Login;
