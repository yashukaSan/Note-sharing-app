import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function LoginPage(){
    const [ showPass, setShowPass ] = useState(false);
    return (
      <>
        <section className="h-screen pt-40 items-center dark:bg-[#191919] ">
          <form className="flex flex-col min-w-120 w-[45%] rounded-3xl gap-5 justify-center items-center border-[#dedede] text-white border-3 m-auto h-[40vh] ">
            <h1 className="text-3xl bg-linear-to-l py-2 px-10 w-100 text-center rounded-2xl border-3 border-yellow-400 from-blue-300 to-red-400 " >
              Welcome Back
            </h1>
            <label className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 flex p-2 min-w-100 rounded-xl justify-center items-center gap-10 ">
              Username:
              <input
                type="text"
                placeholder="e.g., John Doe"
                className="hover:bg-[#4d4d4d] rounded-xl text-center p-1"
              />
            </label>
            <label className="flex border-3 border-t-blue-500 border-l-blue-500 border-r-red-400 border-b-red-400 p-2 rounded-xl w-100 justify-center items-center gap-10">
              Password:
              <div className="flex items-center justify-center">
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
              </div>
            </label>
            <button
              type="submit"
              className="border-2 w-100 rounded-xl p-2 hover:p-[2.7px] hover:font-bold hover:text-lg border-t-purple-400 border-l-yellow-400 border-b-yellow-500 border-r-purple-500 hover:bg-linear-to-tr from-purple-700 to-yellow-600 hover:border-4"
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
