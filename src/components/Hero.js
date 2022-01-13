import React from "react";
import img from "../assets/thanos-profile.jpg";
import Navbar from "./Navbar";
import { Header } from "./styles/Hero.styled";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Header>
        <h1>Front-End Web Developer</h1>
        <h5>
          I&#39;m front-end web developer in Athens, GR. I learned how to code
          during lockdown!
        </h5>
        <div>
          <img src={img} alt="" />
        </div>
      </Header>
    </>
  );
};

export default Hero;
