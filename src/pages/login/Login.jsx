import "./login.css";
import Car from "../../assets/login/car.png";
import { motion } from "framer-motion";
import { carAnimation } from "../../assets/animation/animation";

const Login = () => {
  return (
    <div className="login h-screen ">
      <div className="mx-auto container   ">
        <div className="flex flex-col xl:flex-row items-start xl:justify-center pt-16 md:pt-20 xl:pt-24  h-full gap-4 xl:gap-0">
          {/* left */}
          <div className=" w-full  xl:w-1/3  order-2 xl:order-1 xl:px-0 px-3">
            <p className="font-bold xl:text-5xl md:text-4xl sm:text-3xl text-2xl text-center xl:text-start">
              Login
            </p>

            <div className="mt-10 md:mt-12 lg:mt-16 xl:mt-20 flex flex-col">
              <label
                className=" text-sm md:text-base mb-1 ml-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-black rounded-lg py-2 lg:py-3 px-3 lg:px-3 text-base lg:text-lg"
                id="email"
                type="text"
                placeholder="E.g. name@example.com"
              />
            </div>

            <div className="mt-5 md:mt-6 lg:mt-8 xl:mt-10 flex flex-col">
              <label
                className=" text-sm md:text-base mb-1 ml-2"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="border border-black rounded-lg py-2 lg:py-3 px-3 lg:px-3 text-base lg:text-lg"
                id="password"
                type="password"
                placeholder="**************"
              />
            </div>

            <div className="mt-10 md:mt-12 lg:mt-16 xl:mt-20 flex ">
              <button className="bg-black hover:bg-[#1E1E1E] text-white font-semibold py-3 lg:py-5 px-3 lg:px-4 w-full text-base lg:text-lg  rounded-lg">
                Login
              </button>
            </div>

            <p className="text-sm md:text-base text-gray-700 text-center mt-10">
              You don't have an account?{" "}
              <span className="text-black font-bold cursor-pointer">
                Register now
              </span>
            </p>
          </div>

          {/* right */}
          <div className=" w-full  xl:w-2/3  flex items-center justify-center order-1 xl:order-2">
            <motion.img
              initial={carAnimation.initialMobile}
              animate={carAnimation.animate}
              transition={carAnimation.transition}
              src={Car}
              alt="car"
              className="w-8/12 sm:w-8/12 md:w-9/12 lg:w-11/12  xl:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
