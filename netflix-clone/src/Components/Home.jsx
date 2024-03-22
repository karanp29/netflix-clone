import PropTypes from "prop-types";

import Header from "./Header";
import Hero from "./Hero";
const Home = ({ page }) => {
  return (
    <>
      <Header></Header>
      <Hero page={page}></Hero>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-1"
          >
            <span>What is Material Tailwind?</span>
            <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-1"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Were not always in the position that we want to be at. Were
            constantly growing. Were constantly making mistakes. Were constantly
            trying to express ourselves and actualize our dreams.
          </div>
        </div>
      </div>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-2"
          >
            <span>How to use Material Tailwind?</span>
            <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-2"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            re not always in the position that we want to be at.re constantly
            growing.e constantly making mistakes. constantly trying to express
            ourselves and actualize our dreams.
          </div>
        </div>
      </div>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-3"
          >
            <span>What can I do with Material Tailwind?</span>
            <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-3"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            e not always in the position that we want to be at. Wre constantly
            growing. e constantly making mistakes.re constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  page: PropTypes.string,
};

export default Home;
