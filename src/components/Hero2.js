import React from "react";
import logo from "../assets/profile1.png";
import Navbar from "./Navbar";
import { Header, Flex, ImageContainer } from "./styles/Hero2.styled";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <ImageContainer>
          <img src={logo} alt="" />
        </ImageContainer>
        <Header>
          {/* <h4>Hi, I'm Thanos!</h4> */}
          <h1>Front-end Web Developer</h1>
          <h5>
            I&#39;m front-end web developer located in Athens, GR building sleek
            web apps!
          </h5>
        </Header>
      </Flex>
    </>
  );
};

export default Hero;
