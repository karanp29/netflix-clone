import PropTypes from "prop-types";

import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";

const Home = ({ page }) => {
  return (
    <>
      <Header></Header>
      <Hero page={page}></Hero>
      <Pricing></Pricing>
    </>
  );
};

Home.propTypes = {
  page: PropTypes.string,
};

export default Home;
