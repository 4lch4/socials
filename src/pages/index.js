import React from "react";
import HeroSection from "./../components/HeroSection";
import SocialsSection from "./../components/SocialsSection";

function IndexPage(props) {
  return (
    <>
      {/* <HeroSection
        bgColor="primary"
        size="large"
        bgImage="https://source.unsplash.com/ugnrXk1129g/1600x800"
        bgImageOpacity={0.3}
        title="Socials Haven"
        subtitle="This page serves as a 'directory' of sorts for my various profiles across the web."
      /> */}
      <SocialsSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Heyo, I'm 4lch4 (Al-Kuh)"
        subtitle="Here is a collection of links to my various profiles across the net."
      />
    </>
  )
}

export default IndexPage;
