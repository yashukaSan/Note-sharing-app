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

  const heroClass =`min-h-screen pt-30 bg-linear-to-tr from-blue-600 via-pink-700 to-purple-800 grid items-center`;
  const heroH1 = `md:text-4xl xl:text-6xl p-4 text-xl text-center bg-linear-to-r hover:from-pink-600 via-red-400 hover:via-red-500 
        hover:to-purple-700 text-[#dddddd] font-bold font-serif `;
  const heroP = `flex justify-center hover:text-[#efefef] bg-linear-to-b hover:from-violet-700 md:h-full 
        hover:to-transparent to-violet-700 border-b-5 border-gray-500 text-sm md:text-xl lg:text-2xl xl:text-3xl
        px-16 text-[#afafaf] font-semibold text-center items-center py-10 md:p-30 rounded-2xl md:w-[80%] md:m-auto
        hover:border-b-0 hover:border-t-5`;
  const heroButton = `border-12 m-auto min-w-50 min-h-20 rounded-4xl font-extrabold text-2xl text-blue-400
        bg-white lg:text-4xl lg:p-5
        hover:text-white hover:bg-blue-400 hover:border-white hover:shadow-xl hover:shadow-blue-400
        dark:bg-[#202020] dark:text-red-500 dark:border-6 dark:font-bold 
        dark:hover:text-black dark:hover:bg-red-500 dark:hover:border-black dark:hover:font-extrabold dark:hover:shadow-red-400`;
  const imgSection = `min-h-[50vh] bg-transparent text-4xl text-center bg-linear-to-b from-pink-900 via-pink-700 to-pink-500
        hover:from-pink-300 hover:via-pink-600 hover:to-pink-900 hover:text-red-700 hover:font-bold`;
  const featureSection = `bg-linear-to-t from-blue-600 via-green-200 to-cyan-500 hover:bg-linear-to-b `;
  const featureDiv = `min-h-screen max-w-250 m-auto bg-cyan-700/10 md:text-2xl flex flex-col justify-center 
        gap-12 item-center text-center font-semibold rounded-4xl overflow-hidden `;
  const feedBack = `min-h-screen flex justify-center items-center text-center text-2xl text-black`;
  return (
    <main>
      <motion.div
        animate={{
          y: hidden ? -140 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        id="head"
        className="fixed w-full bg-transparent backdrop-blur-[10px] z-100"
      >
        <Header />
      </motion.div>

      <section id="hero" className={heroClass}>
        <h1 id="heroH1" className={heroH1}>
          Make Note Sharing Easy with
          <br />{" "}
          <span className="text-white">
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
        <p id="heroP" className={heroP}>
          All your notes, synced on all your devices.
          <br /> Get Note-Sharer and start shering notes with your friends.
        </p>
        <button className={heroButton}>
          <Link to="/register">Sign Up Now</Link>
        </button>
      </section>

      <section id="imgSection" className={imgSection}>
        Section for image
      </section>

      <section id="featureSection" className={featureSection} >
        <div className={featureDiv}>
          <h1 className="md:text-5xl text-lg text-[#eeeeee] shadow-lg p-5 shadow-black ">
            Comprehensive underneath,
            <br /> simple on the surface
          </h1>
          <ul className="grid h-[70%] md:h-[50%] grid-cols-3 px-6 gap-12">
            {featureBox.map((item, ind) => {
              return (
                <motion.li
                  initial={{ opacity: 0, x: "50%", y: "20%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ x: "50%" }}
                  transition={{ type: "spring", damping: 500, stiffness: 500 }}
                  className="md:h-[25%] bg-red-500 h-[40%] p-1 text-xs text-justify animation items-center duration-600 rounded-t-xl hover:bg-cyan-600 "
                  key={`list-${ind}`}
                >
                  <h5 className="text-white md:text-xl lg:text-2xl sm:text-sm text-center ">
                    {item.h5}
                  </h5>
                  <p className="text-yellow-200 bg-linear-to-br from-green-600 via-black to-violet-700 md:text-lg text-xs hover:bg-cyan-800 md:h-50 md:text-center h-[300%] rounded-b-xl px-2 ">
                    {item.p}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="feedBack" className={feedBack}>
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
