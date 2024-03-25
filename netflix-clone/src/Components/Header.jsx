const Header = () => {
  return (
    <>
      {/* <div className="mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-black to-transparent px-32">
          <img
            className="w-[20%]"
            src="../src/Assets/Netflix_Logo.png"
            alt=""
          />
          <div className="flex gap-3">
            <div className="relative px-3 border border-gray-600">
              <img src="../src/Assets/lang.svg" alt="" />
              <select
                className="bg-transparent rounded text-sm font-extralight items-center p-2 px-3 w-full"
                name=""
                id=""
              >
                <option className="text-black" value="eng">
                  English
                </option>
                <option className="text-black">Hindi</option>
              </select>
            </div>

            <a
              className="bg-netflix-red-100 hover:bg-netflix-red-200 text-sm font-semibold py-2 px-4 rounded "
              href="./login"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div> */}
      <div className="bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <img className="w-52" src="../src/Assets/Netflix_Logo.png" alt="" />
          <div className="flex gap-3">
            <select
              className="bg-transparent text-white border border-gray-600 rounded text-sm font-extralight text-center px-3"
              name=""
              id=""
            >
              <option className="text-black" value="eng">
                English
              </option>
              <option className="text-black">Hindi</option>
            </select>
            <a
              className="bg-netflix-red-100 hover:bg-netflix-red-200 text-[#ffffff] text-sm font-semibold py-2 px-4 rounded w-fit"
              href="./login.html"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
