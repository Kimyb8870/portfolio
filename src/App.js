import React from "react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import SkillSection from "./sections/SkillSection";
import WorkSection from "./sections/WorkSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
