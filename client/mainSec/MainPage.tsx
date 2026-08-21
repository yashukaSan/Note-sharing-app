import Header from '../components/header/SuccessHead';
import Footer from '../components/Footer'

function MainPage(){
  const name:string = localStorage.getItem("name")!;
  
    return (
      <main className="flex justify-between flex-col h-full min-h-screen">
        <section>
          <Header />

          <section className=" h-20 border bg-linear-to-tr  from-red-600 to-black ">
            <h2 className=" lg:font-bold lg:text-3xl text-xl font-semibold pt-4 text-yellow-300 text-center ">
              Welcome Back, {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>
          </section>
        </section>

        <Footer />
      </main>
    );
}


export default MainPage;