import Proptypes from "prop-types";
import GetStarted from "./GetStarted";
import LoginForm from "./LoginForm";
const Hero = ({ page }) => {
  return (
    <>
      <div>
        <div className="relative -top-28">
          <div className="block h-full w-full">
            <div className="bg-shadow absolute h-full w-full"></div>
            <img
              className=" object-cover object-center -z-10"
              src="../src/Assets/netflix-bg.jpg"
              alt=""
            />
          </div>
          {/*  render component based on page value/**/}
          {page == "home" && <GetStarted></GetStarted>}
          {page == "login" && <LoginForm></LoginForm>}
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  page: Proptypes.string,
};
export default Hero;
