import { SmButton } from "./Buttons";
const Header = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-black flex justify-between items-center px-28">
        <img className="w-24" src="../src/Assets/Netflix_Logo.png" alt="   " />
        <div className="flex gap-3  ">
          <select className="bg-black" name="lang" id="lang">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
          <SmButton content={"Login"}></SmButton>
        </div>
      </div>
    </>
  );
};

export default Header;
