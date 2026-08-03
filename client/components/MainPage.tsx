import { Link } from "react-router";
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import type {JSX} from 'react';
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Typewriter from 'typewriter-effect';

type FeatureBox ={
  h5: string, 
  p: string
};

export default function MainPage():JSX.Element {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (current > prev && current > 140) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const featureBox: FeatureBox[] = [
    {
      h5: "Use it everywhere",
      p: `Notes stayed updated across all your devices, automatically and in real-time. There's no "sync" button: It just works.`,
    },
    {
      h5: "Stay Organized",
      p: "Add tags to find notes quickly with instant searching.",
    },
    {
      h5: "Work Together",
      p: "Share a to-do list, post some instructions, or publish your notes online.",
    },
    {
      h5: "Go Back in Time",
      p: "Notes are backed up with every change, so you can see what you noted last week, or last month.",
    },
    {
      h5: "Markdown Support",
      p: "Write, preview, and publish your notes in Markdown format.",
    },
    {
      h5: "It's Free",
      p: "Apps, backups, syncing, sharing - it's all completely free.",
    },
  ];

  const signUpButtonClass = `border-12 m-auto min-w-50 min-h-20 rounded-4xl font-extrabold text-2xl text-blue-400 bg-white
     hover:text-white hover:bg-blue-400 hover:border-white hover:shadow-xl hover:shadow-blue-400
     dark:bg-[#202020] dark:text-red-500 dark:border-6 dark:font-bold 
     dark:hover:text-black dark:hover:bg-red-500 dark:hover:border-black dark:hover:font-extrabold dark:hover:shadow-red-400`;
  return (
    <main>
      <motion.div
        animate={{
          y: hidden ? -140 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-full backdrop-blur-[10px] z-100"
      >
        <Header />
      </motion.div>

      <section className="h-screen pt-30 bg-[#393940] grid items-center">
        <h1 className="text-4xl text-center text-[#dddddd] font-bold font-serif ">
          Make Note Sharing Easy with
          <br />{" "}
          <span className="text-white" >
            <Typewriter
              options={{
                strings: ["Note-Sharer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 170,
              }}
            />
          </span>
        </h1>
        <p className="text-center hover:text-[#efefef] hover:bg-gray-500 text-xl px-16 text-[#afafaf] font-semibold bg-gray-600 p-30 rounded-2xl w-[80%] m-auto ">
          All your notes, synced on all your devices.
          <br /> Get Note-Sharer and start shering notes with your friends.
        </p>
        <button className={signUpButtonClass}>
          <Link to="/register">Sign Up Now</Link>
        </button>
      </section>

      <section className="h-[50vh] bg-gray-400 text-4xl text-center " >Section for image</section>

      <section className="h-screen max-w-250 m-auto bg-cyan-700 text-2xl flex flex-col justify-center gap-12 item-center text-center text-yellow-300 font-semibold ">
        <h1 className="text-5xl text-white" >Comprehensive underneath,<br/> simple on the surface</h1>
        <ul className="grid h-[70%] md:h-[50%] grid-cols-3 px-6 gap-12" >
          {
            featureBox.map((item,ind)=> {
              return (
                <motion.li
                  initial={{ opacity: 0, x:"50%", y:"20%" }}
                  whileInView={{ opacity:1, x: 0 }}
                  exit={{x:"50%"}}
                  transition={{ type: "spring", damping: 500, stiffness: 500 }}
                  className="md:h-[25%] h-[40%] p-1 text-justify hover:bg-cyan-600 animation items-center duration-600 rounded-t-xl "
                  key={`list-${ind}`}
                >
                  <h5 className="text-white text-2xl text-center ">
                    {item.h5}
                  </h5>
                  <p className="text-yellow-200 text-lg hover:bg-cyan-800 h-[12.5vh] rounded-b-xl px-2 ">
                    {item.p}
                  </p>
                </motion.li>
              );
            })
          }
        </ul>
      </section>

      <section>
        <h1>What people are Saying</h1>
        <ul>
          <li>
            <p>
              If you&apos;re not using Note-Sharer, you&apos;re missing out.
              <span>TechCrunch</span>
            </p>
          </li>
          <li>
            <p>
              If you&apos;re looking foa a cross-platform note-taking tool with
              just enough frills, it&apos; hard to look beyound Note-Sharer.
              <span>MacWorld</span>
            </p>
          </li>
          <li>
            <p>
              If you want a truly distraction-free environment then you
              can&apos;t do better than Note-Sharer for your note-taking needs.
              <span>Zapier</span>
            </p>
          </li>
        </ul>
      </section>
      
      <Footer />
    </main>
  );
}
