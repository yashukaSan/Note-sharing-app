import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

interface userType {
  Uemail?: string | null,
  username?: string | null,
  password: string
}

export default function LoginPage(){
    const [ showPass, setShowPass ] = useState(false);
    const [loginViaEmail, setLoginViaEmail] = useState(false);
    const navigate = useNavigate();
    const [msg, setMsg] = useState<string|null>(null);

    function addData(){
      const userEmail = document?.querySelector('#userEmail') as HTMLInputElement | null;
      const userName = document?.querySelector('#username') as HTMLInputElement | null;
      const password = document.querySelector('#password') as HTMLInputElement | null;

      if (!password) return;

      const payload: userType = {
        password: password.value,
        ...(loginViaEmail
          ? { Uemail: userEmail?.value?.trim() ?? '' }
          : { username: userName?.value?.trim() ?? '' }),
      };

      sendData(payload);
    }

    async function sendData(data: userType){
      try{
        console.log("sendData Called");
       const response = await fetch("/api/auth/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         credentials: "include",
         body: JSON.stringify(data),
       });
       console.log('response created');
       if (response.ok) {
         console.log("response ok");
         const responseData = await response.json();
         localStorage.setItem('token', responseData.token);
         localStorage.setItem("name", responseData.name);
         localStorage.setItem("message", responseData.message);
         checkMessage();

        //  setTimeout(()=>navigate("/success"), 2000);
         
       } else {
         console.error("Failed to send request");
       }
      }
      catch(err){
        console.log(err);
        console.error(err);
      }
       
    }

    async function checkMessage(){
      const message = localStorage.getItem("message");
      if(message) setMsg(message);
    }

    return (
      <>
        {msg && (
          <section className="absolute backdrop-blur h-screen z-100 text-yellow-400 text-center w-screen align-center  mt-[15vh] mb-10[vh] p-5 border-3 items-center m-auto  ">
            <p className="border w-full " >{msg}</p>
          </section>
        )}
        <Link to="/" id="home-link" className="absolute z-0" >
          <h1 className="md:ml-3 fixed mt-10 ml-10 bg-blac dark:bg-black hover:dark:bg-[#303030] hover:dark:text-red-300 text-3xl text-pink-500 shadow-black rounded-xl p-3 font-bold shadow-2xl cursor-pointer ">
            Note-Sharer
          </h1>
        </Link>

        <section className="py-12 z-0 overflow-hidden bg-blue-600 min-h-screen flex items-center justify-center dark:bg-[#191919] ">
          <form
            className="flex rounded-3xl flex-col gap-5 justify-center items-center border-[#fe2e9e] text-white border-6 min-w-60 h-full p-8"
            onSubmit={(e) => {
              e.preventDefault();
              addData();
            }}
          >
            <h1 className=" font-serif md:text-3xl text-xl bg-linear-to-l py-2 px-10 w-full text-center rounded-2xl border-3 border-yellow-400 from-blue-300 to-red-400 ">
              Welcome Back
            </h1>
            {loginViaEmail ? (
              <label className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 grid grid-cols-2 p-2 w-full xl:w-[45%] rounded-xl justify-around items-center 10 ">
                Email:
                <input
                  id="userEmail"
                  type="email"
                  autoComplete="email"
                  placeholder="e.g., johndoe@example.com"
                  className="hover:bg-[#4d4d4d] rounded-xl text-center p-1"
                  required
                />
              </label>
            ) : (
              <label className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 grid grid-cols-2 p-2 w-full rounded-xl justify-around items-center 10 ">
                Username:
                <input
                  id="username"
                  type="text"
                  placeholder="e.g., John Doe"
                  autoComplete="username"
                  className="hover:bg-[#4d4d4d] rounded-xl text-center p-1"
                />
              </label>
            )}
            <label className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 p-2 w-full rounded-xl grid grid-cols-2 justify-around items-center gap-4 md:gap-10 ">
              Password:
              <input
                id="password"
                autoComplete="current-password"
                type={showPass ? "text" : "password"}
                placeholder="e.g., 12345678"
                className="hover:bg-[#3d3d3d] text-center rounded-lg p-1 "
              />
              <button className="hover:bg-[#dfdfdf] hover:text-black text-[#efdfef] rounded-full m-auto  ">
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
              onClick={(e) => {
                e.preventDefault();
                addData();
                console.log("button clicked");
              }}
            >
              LOGIN
            </button>
            <nav className="grid text-center items-center">
              {loginViaEmail ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setLoginViaEmail(false);
                  }}
                  className="underline hover:text-blue-400"
                >
                  Want to Login via username?
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setLoginViaEmail(true);
                  }}
                  className="underline hover:text-blue-400"
                >
                  Want to Login via Email?
                </button>
              )}
              <Link to="/register" className="underline hover:text-blue-400">
                Not Registered?
              </Link>
            </nav>
          </form>
        </section>
      </>
    );
}
