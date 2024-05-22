"use client";
import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation.jsx";
import ProfilePicture from "@/components/ProfilePicture.jsx";
import Introduction from "@/components/Introduction.jsx";
import ProfilesButton from "@/components/ProfilesButton.jsx";
import ShadowScroll from "@/components/ShadowScroll.jsx";
import Projects from "@/components/Projects.jsx";


const Home = () => {
  return (
    <main className="w-full flex flex-col items-center gap-8">
      <Navigation />
      <ProfilePicture />
      <Introduction />
      <ProfilesButton />
      {/* <ShadowScroll /> */}
      <Projects /> 

    </main>
  );
};

export default Home;


