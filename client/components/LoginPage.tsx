import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function LoginPage(){
    const [ showPass, setShowPass ] = useState(false);
    return (
      <>
        <section className="py-12 overflow-hidden bg-blue-600 min-h-screen flex items-center justify-center dark:bg-[#191919] ">
          <form className="flex rounded-3xl flex-col gap-5 justify-center items-center border-[#fe2e9e] text-white border-6 min-w-60 h-full p-8">
            <h1 className=" font-serif md:text-3xl text-xl bg-linear-to-l py-2 px-10 w-full text-center rounded-2xl border-3 border-yellow-400 from-blue-300 to-red-400 ">
              Welcome Back
            </h1>
            <label className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 grid grid-cols-2 p-2 w-full xl:w-[45%] rounded-xl justify-around items-center 10 ">
              Username:
              <input
                type="text"
                placeholder="e.g., John Doe"
                className="hover:bg-[#4d4d4d] rounded-xl text-center p-1"
              />
            </label>
            <label className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 p-2 w-full rounded-xl grid grid-cols-2 justify-around items-center gap-4 md:gap-10 ">
              Password:
              <input
                type={showPass ? "text" : "password"}
                placeholder="e.g., 12345678"
                className="hover:bg-[#3d3d3d] text-center rounded-lg p-1 "
              />
              <button className="hover:bg-[#dfdfdf] hover:text-black text-[#efdfef] rounded-full">
                {showPass ? (
                  <Eye
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPass(false);
                    }}
                  />
                ) : (
                  <EyeClosed
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPass(true);
                    }}
                  />
                )}
              </button>
            </label>
            <button
              type="submit"
              className="border-2 w-full max-w-lg rounded-xl p-2 hover:p-[2.7px] hover:font-bold hover:text-lg border-t-purple-400 border-l-yellow-400 border-b-yellow-500 border-r-purple-500 hover:bg-linear-to-tr from-purple-700 to-yellow-600 hover:border-4"
            >
              LOGIN
            </button>
            <nav>
              <Link to="/register" className="underline hover:text-blue-400">
                Not Registered?
              </Link>
            </nav>
          </form>
        </section>
      </>
    );
}
