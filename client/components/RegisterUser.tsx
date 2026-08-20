import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

interface userType{
  Uname: string,
  Uemail: string,
  username: string,
  password: string
};

export default function RegisterUser() {
  const [showPass, setShowPass] = useState(false);
  const navigator = useNavigate();
  const [msg, setMsg] = useState<string|null>(null);

  async function handleSubmission(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = document.getElementById("Uname") as HTMLInputElement;
    const email = document.getElementById("Uemail") as HTMLInputElement;
    const username = document.getElementById("username") as HTMLInputElement;
    const paswd = document.getElementById("password") as HTMLInputElement;

    if (!(name || email || username || paswd)) return;

    const payload: userType = {
      Uname: name.value,
      Uemail: email.value,
      username: username.value,
      password : paswd.value
    }

    console.log('push data called');
    try{
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(payload)
      });

      if(response.ok){
        const result = await response.json();
        console.log('Success', result);
        localStorage.setItem('token', result.token);
        localStorage.setItem("name", result.name);
        localStorage.setItmm('message', result.message);

        setTimeout(()=>{
          navigator("/success");
          localStorage.removeItem('message');
          setMsg(null);
        }, 1000)
        

        name.value="";
        email.value="";
        username.value="";
        paswd.value="";
      }
      else{
        console.error('Failed to reguster user');
      }
    }catch(err){
      console.error(err);
    }
  }

  return (
    <>
      {msg && (
        <section className="absolute backdrop-blur h-screen z-100 text-red-600 text-center w-screen flex disabled:pointer-event-none cursor-not-allowed align-center justify-center items-center m-auto  ">
          <p className="border-5 border-blue-300 m-auto font-serif uppercase p-6 rounded-3xl font-bold text-xl ">
            {msg}
          </p>
        </section>
      )}

      <Link to="/" id="home-link">
        <h1 className="md:ml-3 fixed mt-10 ml-10 lg:mt-20 lg:ml-20 lg:text-4xl bg-blac dark:bg-black hover:dark:bg-[#303030] hover:dark:text-red-300 text-3xl text-pink-500 shadow-black rounded-xl p-3 font-bold shadow-2xl cursor-pointer ">
          Note-Sharer
        </h1>
      </Link>

      <section className="py-12 overflow-hidden bg-blue-600 min-h-screen flex items-center justify-center dark:bg-[#191919] ">
        <form
          className="flex rounded-3xl flex-col gap-5 justify-center items-center border-[#fe2e9e] text-white border-6 min-w-60 h-full p-8"
          onSubmit={handleSubmission}
        >
          <h1 className="md:text-4xl text-xl bg-red-400 min-w-50 w-full text-center p-3 rounded-4xl font-mono ">
            Registration
          </h1>
          <label
            htmlFor="Uname"
            className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 p-2 w-full rounded-xl grid grid-cols-2 justify-around items-center gap-4 md:gap-10 "
          >
            <span>Your Name:</span>
            <input
              id="Uname"
              type="text"
              name="name"
              placeholder="e.g., John Doe"
              className="hover:bg-[#4d4d4d] rounded-xl text-center p-1"
              required
            />
          </label>
          <label
            htmlFor="Uemail"
            className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 p-2 w-full rounded-xl grid grid-cols-2 justify-around items-center gap-4 md:gap-10 "
          >
            <span>E-Mail: </span>
            <input
              id="Uemail"
              type="email"
              name="email"
              placeholder="e.g., JohnDoe@email.com"
              className="hover:bg-[#4d4d4d] rounded-xl text-center p-1"
              required
            />
          </label>
          <label
            htmlFor="username"
            className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 p-2 w-full rounded-xl grid grid-cols-2 justify-around items-center gap-4 md:gap-10 "
          >
            <span>Username: </span>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="e.g., JohnDoe"
              className="hover:bg-[#4d4d4d] rounded-xl text-center p-1"
              required
            />
          </label>
          <label
            htmlFor="password"
            className="border-l-red-400 border-t-red-400 border-r-blue-500 border-b-blue-500 border-3 p-2 w-full rounded-xl grid grid-cols-[1fr_2fr] justify-around items-center gap-4 md:gap-10 "
          >
            <span>password: </span>

            <input
              id="password"
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="e.g., 12345678"
              className="hover:bg-[#3d3d3d] w-full text-center text=xs rounded-lg p-1 "
              required
            />
            <button
              type="button"
              className="hover:bg-[#dfdfdf] hover:text-black text-[#efdfef] rounded-full"
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? <Eye /> : <EyeClosed />}
            </button>
          </label>
          <button
            type="submit"
            className="border-2 w-full rounded-xl p-2 hover:p-[2.7px] hover:font-bold hover:text-lg border-t-purple-400 border-l-yellow-400 border-b-yellow-500 border-r-purple-500 hover:bg-linear-to-tr from-purple-700 to-yellow-600 hover:border-4"
          >
            Register
          </button>

          <nav className="underline hover:text-blue-400">
            <Link to="/login">Already Registered</Link>
          </nav>
        </form>
      </section>
    </>
  );
}
