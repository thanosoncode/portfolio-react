import React from "react";
import avatar from "../assets/images/thanos-port.png";
import Navbar from "./Navbar";
import { Header, Flex, ImageContainer } from "./styles/Hero.styled";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <h1>Hello, I&#39;m Thanos.</h1>
        <Header>
          <ImageContainer>
            <img src={avatar} alt="" />
          </ImageContainer>
          <div>
            <h3>Front-end Web Developer</h3>
            <h5>
              Located in Athens, GR. <br />I enjoy building sleek websites and
              apps!
            </h5>
          </div>
        </Header>
      </Flex>
    </>
  );
};

export default Hero;
