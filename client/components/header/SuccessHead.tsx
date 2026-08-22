import { Link } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Power } from 'lucide-react';
import Logout from '../../mainSec/logout';

export default function Header() {
  const [isHover, setIsHover] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const firstLetter:string = localStorage.getItem('name')!;
    function logoutMe(){
        setShowLogout(true);
    }
  return (
    <>
      <header className="flex p-3 static bg-[#dfdfdf] justify-between rounde-xl lg:p-6 bg-linear-to-tr from-pink-700 via-[#ddc9ab] to-blue-700 dark:from-[#765221] dark:via-[#b0470d] dark:to-[#765221] ">
        <h1 className="md:ml-3 bg-blac dark:bg-black hover:dark:bg-[#303030] hover:dark:text-red-300 text-3xl text-pink-500 shadow-black rounded-xl p-3 font-bold shadow-2xl cursor-pointer ">
          Note-Sharer
        </h1>

        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => setIsHover(true)}
          className=" animation delay-1300 w-15 z-100 h-15 relative text-center text-lg shadow-black transition hover:border-blue-300 hover:shadow-lg justify-around items-center border-[#adadad] bg-[#dadada] border-3 border-x-6 rounded-full text-pink-500 font-semibold xl:text-xl flex bg-linear-to-t from-cyan-400 via-white to-cyan-400 dark:from-red-500 dark:to-red-500 dark:via-black dark:text-cyan-300 "
        >
          {firstLetter[0]}
          {isHover && (
            <motion.div
              // className="grid fixed h-100 text-xl bg-[#dfdfdf] justify-center w-[99%] -ml-3 border-x-12 mt-18 gap-4 p-6 items-center md:hidden border-black border-3 rounded-xl text-pink-500 font-semibold text-center bg-linear-to-l from-cyan-400 via-white to-cyan-400 dark:from-red-500 dark:to-red-500 dark:via-black dark:text-cyan-300  "
              className=" z-100 border absolute w-40 -ml-30 rounded-xl backdrop-blur-lg grid gap-2 p-4 justify-center items-center align-center mt-39 "
              initial={{ x: "10%" }}
              animate={{ x: 0 }}
              exit={{ x: "10%" }}
              transition={{ type: "spring", damping: 15, stiffness: 250 }}
            >
              <ul
                // className=" z-100 border absolute w-40 -ml-30 rounded-xl backdrop-blur-lg grid gap-2 p-4 justify-center items-center align-center mt-39 "
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
            </motion.div>
          )}
        </div>

      </header>
      {showLogout && <Logout />}
    </>
  );
}
