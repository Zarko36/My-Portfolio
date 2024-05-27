"use client";
import React from "react";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Computer from "@/public/Computer.jsx";
import Image from "next/image";
import Navigation from "@/components/Navigation.jsx";
import ProfilePicture from "@/components/ProfilePicture.jsx";
import Introduction from "@/components/Introduction.jsx";
import ProfilesButton from "@/components/ProfilesButton.jsx";
import ShadowScroll from "@/components/ShadowScroll.jsx";
import Projects from "@/components/Projects.jsx";
import Skills from "@/components/Skills.jsx";
import Experiences from "@/components/Experiences.jsx";
import Education from "@/components/Education.jsx";
import Contact from "@/components/Contact.jsx";
import About from "@/components/About.jsx";
import Extra from "@/components/Extra.jsx";
import { motion } from "framer-motion";
const animate = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
const Home = () => {
  return (
    <main className="w-full flex flex-col items-center gap-8">
      <Navigation />
      <div id="profile-picture">
        <ProfilePicture />
      </div>
      <div id="introduction">
        <Introduction />
      </div>
      <div id="profiles-button">
        <ProfilesButton />
      </div>
      <h1 className="text-4xl font-bold text-center mt-20">Try Me</h1>
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
      > 
        <motion.div
          whileHover={{
            scale: 1.025,
            transition: { type: "spring", stiffness: 100 },
          }}
          className="bg-gradient-to-b from-neutral-500 to-neutral-900 hover:border hover:border-gray-300 hover:border-4 hover:shadow-2xl hover:shadow-teal-300 rounded-xl"
        >
          <Canvas camera={{ position: [0, 0, 7.5], near: 0.1, far: 1000 }}>
            <ambientLight />
            <OrbitControls enableZoom={true}/>
            <Suspense fallback={null}>
              <Computer rotation={[0, -Math.PI / 4, 0]} />
            </Suspense>
            <Environment preset="city" />
          </Canvas>
        </motion.div>
      </motion.div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="extra">
        <Extra />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default Home;