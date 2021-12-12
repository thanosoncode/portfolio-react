import html from "../assets/html5.png";
import css from "../assets/css3.png";
import js from "../assets/js.png";
import react from "../assets/react.jpg";
import next from "../assets/next.png";
import styled from "../assets/styled.jfif";
import { StyledSkills, Flex, Image } from "./styles/Skills.styled";

const stack = [
  { name: "HTML5", image: html },
  { name: "CSS3", image: css },
  { name: "Javascript", image: js },
  { name: "React", image: react },
  { name: "Next.js", image: next },
  { name: "Styled Comp", image: styled },
];

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <p>My skills</p>

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
