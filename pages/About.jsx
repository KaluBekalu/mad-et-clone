import React from "react";
import Image from "next/image";
import AboutHero from "../components/AboutPage/AboutHero";
import OurTeam from "../components/AboutPage/OurTeam";
import OurPurpose from "../components/AboutPage/OurPurpose";
import Methodologies from "../components/AboutPage/Methodologies";

function Home() {
  return (
    <>
      <AboutHero />
      <OurTeam />
      <OurPurpose />
      <Methodologies />
    </>
  );
}

export default Home;
