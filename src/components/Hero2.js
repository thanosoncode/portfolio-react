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
          <h4>Hi, I'm Thanos!</h4>
          <h1>
            Frontend <br />
            Web Developer
          </h1>
          <h5>
            I&#39;m frontend web developer <br />
            located in Athens, GR
            <br />
            building sleek web apps!
          </h5>
        </Header>
      </Flex>
    </>
  );
};

export default Hero;
