import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Power } from 'lucide-react';

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const firstLetter:string = localStorage.getItem('name')!;
  const linkClass =
    "rounded-xl p-1 shadow-black transition duration-300 hover:-translate-y-1 hover:border-2 hover:border-blue-300 hover:shadow-lg";

    function logoutMe(){
        localStorage.removeItem('token');
        setShowLogout(true);
        setTimeout(()=>{window.location.reload(); setShowLogout(false)}, 1500)
        
    }
  return (
    <header
     className="flex p-3 static bg-[#dfdfdf] justify-between rounde-xl lg:p-6 bg-linear-to-tr from-pink-700 via-[#ddc9ab] to-blue-700 dark:from-[#765221] dark:via-[#b0470d] dark:to-[#765221] "
     >
        
      <h1 className="md:ml-3 bg-blac dark:bg-black hover:dark:bg-[#303030] hover:dark:text-red-300 text-3xl text-pink-500 shadow-black rounded-xl p-3 font-bold shadow-2xl cursor-pointer ">
        Note-Sharer
      </h1>

      <nav
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={()=>setIsHover(true)}
        className="w-15 h-15 text-center text-lg shadow-black transition duration-300 hover:border-blue-300 hover:shadow-lg justify-around items-center border-[#adadad] bg-[#dadada] border-3 border-x-6 rounded-full text-pink-500 font-semibold xl:text-xl md:flex bg-linear-to-t from-cyan-400 via-white to-cyan-400 dark:from-red-500 dark:to-red-500 dark:via-black dark:text-cyan-300 "
      >
          {firstLetter[0]}
          {isHover && (
            <ul
              className="border fixed w-40 -ml-30 rounded-xl backdrop-blur-lg grid gap-2 p-4 justify-center items-center align-center mt-39 "
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <li className="hover:cursor-pointer hover:font-bold text-white hover:underline">
                <Link to="./success/me">Profile</Link>
              </li>
              <li className="hover:cursor-pointer hover:font-bold text-white hover:underline">
                Setting
              </li>
              <li
                className="hover:cursor-pointer hover:font-bold text-red-500 hover:underline flex justify-center items-center gap-2 "
                onClick={logoutMe}
              >
                <Power size={15} className="text-red-500 font" />
                Logout
              </li>
            </ul>
          )}
      </nav>

      {/* When Screen size is Small*/}
      <div className="md:hidden animation mr-6 mt-4 duration-500 delay-500 ">
        {!visible ? (
          <Menu onClick={() => setVisible((prev) => !prev)} size={23} />
        ) : (
          <X onClick={() => setVisible((prev) => !prev)} size={20} />
        )}
      </div>
      {visible && (
        <motion.nav
          className="grid fixed h-100 text-xl bg-[#dfdfdf] justify-center w-[99%] -ml-3 border-x-12 mt-18 gap-4 p-6 items-center md:hidden border-black border-3 rounded-xl text-pink-500 font-semibold text-center bg-linear-to-l from-cyan-400 via-white to-cyan-400 dark:from-red-500 dark:to-red-500 dark:via-black dark:text-cyan-300  "
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
        >
          <Link to="./me" className={linkClass}>
            Profile
          </Link>
          <Link to="#contact-us" className={linkClass}>
            Contact Us
          </Link>
          <Link to="#help" className={linkClass}>
            Help
          </Link>
          <Link to="#support" className={linkClass}>
            Support Forum
          </Link>
          <Link to="#blog" className={linkClass}>
            Blog
          </Link>
        </motion.nav>
      )}
    </header>
  );
}
