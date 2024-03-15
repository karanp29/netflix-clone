import PropTypes from "prop-types";

import Header from "./Header";
import Hero from "./Hero";
const Home = ({ page }) => {
  return (
    <>
      <Header></Header>
      <Hero page={page}></Hero>
    </>
  );
};

Home.propTypes = {
  page: PropTypes.string,
};

export default Home;
