import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import images from "next/image";
export default function LoginPage() {
  return (
    <div className="">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[620px] h-[820px] shadow-md rounded-lg px-5 py-3 bg-gray-300 mt-110">
          <div className="flex flex-col w-full px-2">
            <div className="flex gap-3 items-center justify-center">
              <button className="w-[60px] h-[50px] bg-gray-100 rounded-lg size-[10] grid place-content-center">
                <CiLock />
              </button>
              <h1 className="text-black font-bold text-[20px] text-center">
                Login to your account
              </h1>
            </div>

            <p className=" text-gray-800 text-sm text-center mt-5 ml-8  font-medium">
              Your personal data will be used to support your experience <br />
              throughout this website, to manage access to your account.
            </p>

            <div className="mt-5">
              <form action="">
                <div className="my-2 relative">
                  <MdOutlineEmail className="absolute left-3 top-12 -translate-y-1/2 text-black size-6 " />
                  <label htmlFor="">Email address</label>
                  <input
                    type="email"
                    className="w-full border-2 py-2.5 px-4 pl-10 rounded-lg bg-white border-gray-200"
                    placeholder=" me@email.com"
                    required
                  />
                </div>

                <div className="my-2 relative">
                  <CiLock className="absolute left-3 top-12 -translate-y-1/2 text-black size-6 " />
                  <label htmlFor="">password</label>
                  <input
                    type="password"
                    className="w-full border-2 py-2.5 px-4 rounded-lg border-gray-200 bg-white pl-10"
                    placeholder="123456"
                    required
                  />
                  <div className="size-5 rounded-lg absolute right-5 top-8 cursor-pointer shadow-lg grid place-content-center">
                    <img
                      src="/eyeopen.png"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="accent-green-500" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <a
                    href="forgot password"
                    className="underline hover:text-green-700 cursor-pointer"
                  >
                    Forgot password
                  </a>
                </div>

                <button className="bg-green-500 w-full mt-5 px-5 py-3 rounded-lg cursor-pointer hover:bg-green-600 flex items-center justify-center gap-2 ">
                  Login
                  <FaArrowRightLong />
                </button>

                <p className="text-md text-center text-gray-700 mt-4 ">
                  Don't have an account?{" "}
                  <span className="text-black underline cursor-pointer hover:text-green-600">
                    {" "}
                    <a href="">Register now</a>
                  </span>
                </p>
              </form>
            </div>
            <hr className="mt-9 text-gray-400" />
          </div>
          <p className="mt-6 text-center text-gray-700 text-md">
            Login with social networks
          </p>

          <div className="flex flex-col gap-y-4 mt-7">
            <button className="bg-blue-600 w-full px-5 py-3 cursor-pointer rounded-lg hover:bg-blue-700 text-white hover:text-yellow-400 text-sm">
              Sign in with Facebook
            </button>
            <button className="bg-red-600 w-full px-5 py-3  cursor-pointer rounded-lg hover:bg-red-700 text-white hover:text-yellow-400 text-sm">
              Sign in with Google
            </button>
            <button className="bg-black w-full px-5 py-3 cursor-pointer rounded-lg hover:bg-black text-white hover:text-yellow-400 text-sm">
              Sign in with GitHub
            </button>
            <button className="bg-blue-600 w-full px-5 py-3 cursor-pointer rounded-lg hover:bg-blue-700 text-white hover:text-yellow-400 text-sm">
              Sign in with Linkedin
            </button>
            <button className="bg-blue-600 w-full px-5 py-3 cursor-pointer rounded-lg hover:bg-blue-700 text-white hover:text-yellow-400 text-sm">
              Sign in with Linkedin OpenID connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
