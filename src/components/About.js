import React from "react";
import { Header } from "./styles/About.styled";
import pdf from "../assets/Chrysanthopoulos-Thanos.pdf";

const About = () => {
  return (
    <div>
      <Header>
        <h4>
          <a href="#contact">A bit about me.</a>
        </h4>

        <article>
          <p>
            Last year I was fortunate enough to be in a lockdown and started
            thinking of ways how to fill all these extra hours.{" "}
            <span>Luckily, I found out about code!</span> I did a few courses,
            got frustrated, didn't want to see code ever again, the usual staff.
            But somehow I insisted and things slowly started making a little bit
            of sense.{" "}
            <span>
              I loved the learning process and the feeling that comes with
              building something by yourself.
            </span>{" "}
            Bringing ideas to life in the browser from an empty folder is
            amazing!
          </p>
          <p>
            Currently, I enjoy working with React and Styled Components having
            things nice and organized and implement as many best practices I
            can. Take a look at my <a href="#skills">skills</a> and some of my
            most recent <a href="#projects">projects</a> below. Checkout my{" "}
            <a href={pdf} target="_blank" rel="noreferrer">
              resume
            </a>
            , my{" "}
            <a
              href="https://github.com/thanosoncode?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            Profile, and my{" "}
            <a href="https://gr.linkedin.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            Repositories.
          </p>
        </article>
      </Header>
    </div>
  );
};

export default About;
