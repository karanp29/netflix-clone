import Proptypes from "prop-types";
import GetStarted from "./GetStarted";
import LoginForm from "./LoginForm";
const Hero = ({ page }) => {
  return (
    <>
      <div className="w-screen relative -top-32">
        <div className="relative">
          <img className="mx-auto" src="../src/Assets/netflix-bg.jpg" alt="" />
        </div>
        <div className="bg-shadow absolute w-screen h-full top-0 mx-auto"></div>
        {page == "home" && <GetStarted />}
        {page == "login" && <LoginForm />}
      </div>
    </>
  );
};

Hero.propTypes = {
  page: Proptypes.string,
};
export default Hero;
