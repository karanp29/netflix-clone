import PropTypes from "prop-types";

const LgButton = ({ content }) => {
  return (
    <button
      type="submit"
      className="bg-netflix-red-100 hover:bg-netflix-red-200 text-[#ffffff] font-semibold text-lg py-4 px-3 rounded-sm"
    >
      {content}
    </button>
  );
};

const MdButton = ({ content }) => {
  return (
    <button
      type="submit"
      className="bg-netflix-red-100 hover:bg-netflix-red-200 text-[#ffffff] font-medium py-1 px-2 rounded-sm"
    >
      {content}
    </button>
  );
};

const SmButton = ({ content }) => {
  return (
    <button className="bg-netflix-red-100 hover:bg-netflix-red-200 text-[#ffffff] text-xs font-medium py-1 px-2 rounded-sm">
      {content}
    </button>
  );
};

MdButton.propTypes = {
  content: PropTypes.string,
};
SmButton.propTypes = {
  content: PropTypes.string,
};
LgButton.propTypes = {
  content: PropTypes.string,
};
export { SmButton, MdButton, LgButton };
