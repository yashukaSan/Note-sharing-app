import Header from '../components/Header';

function MainPage(){
  const name:string = localStorage.getItem("name")!;
  
    return (
      <>
        <Header />

        <section className=" h-20 border bg-linear-to-tr from-red-600 to-black " > 
          <h2 className=" lg:font-bold lg:text-3xl text-xl font-semibold pt-4 text-yellow-300 text-center " >
            Welcome Back, {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
        </section>
      </>
    );
}


export default MainPage;