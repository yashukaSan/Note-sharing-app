import { Link } from "react-router";
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import type {JSX} from 'react';
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Typewriter from 'typewriter-effect';

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
      <section>Section for image</section>
      <section className="h-screen">
        <h1>Comprehensive underneath, simple on the surface</h1>
        <ul>
          <li>
            <h5>Use it everywhere</h5>
            <p>
              Notes stayed updated across all your devices, automatically and in
              real-time. There&apos;s no &quot;sync&quot; button: It just works.
            </p>
          </li>
          <li>
            <h5>Stay Organized</h5>
            <p>Add tags to find notes quickly with instant searching.</p>
          </li>
          <li>
            <h5>Work Together</h5>
            <p>
              Share a to-do list, post some instructions, or publish your notes
              online.
            </p>
          </li>
          <li>
            <h5>Go Back in Time</h5>
            <p>
              Notes are backed up with every change, so you can see what you
              noted last week, or last month.
            </p>
          </li>
          <li>
            <h5>Markdown Support</h5>
            <p>Write, preview, and publish your notes in Markdown format.</p>
          </li>
          <li>
            <h5>It's Free</h5>
            <p>
              Apps, backups, syncing, sharing - it&apos;s all completely free.
            </p>
          </li>
        </ul>
      </section>
      <hr />
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
      <hr />
      <Footer />
    </main>
  );
}
