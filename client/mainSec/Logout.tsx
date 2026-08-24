import { Link } from 'react-router';

export default function Logout(){

    setTimeout(()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }, 1500);

    return (
      <section className=" h-[90vh] w-[90vw] text-4xl flex bg-black/30 flex-col justify-center rounded-xl backdrop=blur-lg text-red-600 align-center items-center border fixed mx-[5vh] my-[5vh] backdrop-blur-xl">
        <p>Successfully Logout</p>
        <Link to="/login" className=" hover:cursor-pointer border p-5 mt-10 rounded-3xl bg-black font-semibold ">
          <button>Please Login</button>
        </Link>
      </section>
    );
}