import React from "react";
import logo from "../assets/images/profile1.png";
import Navbar from "./Navbar";
import { Header, Flex, ImageContainer } from "./styles/Hero.styled";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <ImageContainer>
          <img src={logo} alt="" />
        </ImageContainer>
        <Header>
          <h1>Front-end Web Developer</h1>
          <h5>
            I&#39;m front-end web developer located in Athens, GR. <br /> I
            enjoy building sleek websites and apps!
          </h5>
        </Header>
      </Flex>
    </>
  );
};

export default Hero;
