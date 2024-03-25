import { LgButton } from "./Buttons";

function GetStarted() {
  return (
    <>
      <div className="absolute w-screen mx-auto top-1/3">
        <div className="flex flex-col flex-wrap w-1/3 text-center mx-auto">
          <h1 className="font-semibold text-[50px] w-auto text-center">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-center font-light text-lg">
            Starts at ₹149. Cancel anytime.
          </p>
        </div>
        <div className="flex flex-col flex-wrap">
          <form action="" className="text-center">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div>
              <input
                className="bg-transparent border border-green-500 p-2 py-4 rounded w-1/4 m-4"
                type="email"
                name=""
                id=""
                placeholder="Enter Email"
              />
              <LgButton content={"Get Started"}></LgButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
