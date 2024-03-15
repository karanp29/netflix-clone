const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gradient-to-b from-black to-transparent px-32 relative z-10">
        <img className="w-52" src="../src/Assets/Netflix_Logo.png" alt="" />
        <div className="flex gap-3">
          <div className="relative px-3 border border-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute left-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            <select
              className="bg-transparent  rounded text-sm font-extralight items-center p-2 px-3 w-full"
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
    </>
  );
};

export default Header;
