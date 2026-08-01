import { Tally1, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from 'react';
import {motion} from 'motion/react';

export default function Header() {
  const [visible, setVisible] = useState(false);
  const linkClass =
    "rounded-xl p-1 shadow-black transition duration-300 hover:-translate-y-1 hover:border-2 hover:border-blue-300 hover:shadow-lg";
    return (
      <header className="flex border-3 p-3 static bg-[#dfdfdf] border-yellow-300 justify-between rounde-xl lg:p-6 ">
        <h1 className="ml-3 text-3xl text-pink-800 shadow-black rounded-xl p-3 font-bold shadow-2xl">
          Note-Sharer
        </h1>

        <nav className="justify-around w-[60%] items-center border-[#adadad] bg-[#dadada] border-3 rounded-xl text-pink-500 font-semibold lg:w-[50%] xl:text-xl hidden md:flex">
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
          <Tally1 />
          <Link to="/login" className={linkClass}>
            Login
          </Link>
          <Link to="/register" className={linkClass}>
            Register
          </Link>
        </nav>

        {/* When Screen size is Small*/}
        <div className="md:hidden animation mr-6 duration-500 delay-500 ">
          {!visible ? (
            <Menu onClick={() => setVisible((prev) => !prev)} size={33} />
          ) : (
            <X onClick={() => setVisible((prev) => !prev)} size={30} />
          )}
        </div>
        {visible && (
          <motion.nav
            className="grid fixed h-[500%] text-xl bg-[#dfdfdf] justify-center w-[99%] -ml-3 border-x-12 mt-18 gap-4 p-6 items-center md:hidden border-black border-3 rounded-xl text-pink-500 font-semibold text-center "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
          >
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
            <nav className="flex gap-12">
              <Link to="/login" className={`${linkClass} border py-2 px-5`}>
                Login
              </Link>
              <Tally1 size={40} className="relative left-4" />
              <Link to="/register" className={`${linkClass} border py-2 px-5`}>
                Register
              </Link>
            </nav>
          </motion.nav>
        )}
      </header>
    );
}
