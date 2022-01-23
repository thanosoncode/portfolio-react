import html from "../assets/images/html5.png";
import css from "../assets/images/css3.png";
import js from "../assets/images/js.png";
import react from "../assets/images//react2.jpg";
import next from "../assets/images/next.png";
import styled from "../assets/images/styled.jfif";
import firebase from "../assets/images/firebase.png";
import redux from "../assets/images/redux.png";
import { StyledSkills, Flex, Image } from "./styles/Skills.styled";

const stack = [
  { name: "HTML5", image: html },
  { name: "CSS3", image: css },
  { name: "Javascript", image: js },
  { name: "React", image: react },
  { name: "Next.js", image: next },
  { name: "Styled Comp", image: styled },
  { name: "Firebase", image: firebase },
  { name: "Redux", image: redux },
];

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <p>Things I&#39;ve learned</p>

      <Flex>
        {stack.map((item, index) => {
          const { name, image } = item;
          return (
            <div key={index}>
              <p>{name}</p>
              <Image key={index}>
                <img src={image} alt="" />
              </Image>
            </div>
          );
        })}
      </Flex>
    </StyledSkills>
  );
};

export default Skills;
