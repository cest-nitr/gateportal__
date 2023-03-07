import React from "react";
const Login = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:h-screen h-full w-full bg-[#205295] mt-[70px] items-start">
        <div className="flex flex-col justify-center my-4 sm:mt-6">
          <form
            action="/"
            className=" mx-auto p-8 rounded-lg px-8 bg-white text-[#205295]"
          >
            <h2 className="text-4xl font-bold text-center">Sign Up</h2>
            <div className="flex flex-col py-2 font-semibold">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                className="rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none"
              />
            </div>
            <div className="sm:flex sm:gap-x-2">
              <div className="flex flex-col py-2 font-semibold sm:w-[60%]">
                <label htmlFor="name">Institution</label>
                <input
                  type="text"
                  className="rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none"
                />
              </div>
              <div className="flex flex-col py-2 font-semibold sm:w-[40%]">
                <label htmlFor="name">Year of Graduation</label>
                <input
                  type="text"
                  className="rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col py-2 font-semibold">
              <label htmlFor="name">City Where You Live</label>
              <input
                type="text"
                className="rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none"
              />
            </div>
            <div className="flex flex-col py-2 font-semibold">
              <label htmlFor="name">Email Id</label>
              <input
                type="text"
                className="rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none"
              />
            </div>
            <div className="sm:flex sm:gap-x-2">
              <div className="flex flex-col py-2 font-semibold">
                <label htmlFor="password">Set a Password</label>
                <input
                  type="password"
                  className="rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none"
                />
              </div>
              <div className="flex flex-col py-2 font-semibold">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  className="rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none"
                />
              </div>
            </div>

            <button className="w-full my-5 py-2 bg-[#205295] text-white font-semibold rounded-lg shadow-lg hover:shadow-sm">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
