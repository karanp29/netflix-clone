import { MdButton } from "./Buttons";

function GetStarted() {
  return (
    <>

          <div className="absolute top-0 flex flex-col justify-center items-center h-full w-full px-32">
            <div className="flex flex-col flex-wrap">
              <h1 className="font-semibold text-[30px] w-auto text-center">
                Unlimited movies, TV shows and more
              </h1>
              <p className="text-center font-light text-lg">
                Starts at ₹149. Cancel anytime.
              </p>
            </div>
            <div>
              <form action="">
                <p>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <div>
                  <input
                    className="bg-transparent border border-green-500 p-2 rounded"
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter Email"
                  />
                  <MdButton content={"Get Started"}></MdButton>
                </div>
              </form>
            </div>
          </div>

    </>
  );
}

export default GetStarted;
