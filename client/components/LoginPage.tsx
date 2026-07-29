import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage(){
    const [ showPass, setShowPass ] = useState(false);
    return (
      <>
        <section className="h-screen items-center dark:bg-[#191919] ">
          <form className="flex flex-col gap-5 justify-center items-center border-[#dedede] text-white border-3 m-auto h-[40vh] ">
            <label className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 flex p-2 w-100 rounded-xl justify-center items-center gap-10 ">
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
              className="border-2 w-100 rounded-xl p-2 border-t-purple-400 border-l-yellow-400 border-b-yellow-500 border-r-purple-500"
            >
              LOGIN
            </button>
          </form>
        </section>
      </>
    );
}