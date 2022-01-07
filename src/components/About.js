import {
  StyledAbout,
  Header,
  ImageContainer,
  Grid,
  Article,
  SectionFooter,
} from "./styles/About.styled.js";
import logo from "../assets/profile1.png";
import pdf from "../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout>
      <header>
        <h1>Hi, I&#39;m Thanos </h1>
        {/* <span>👋</span> */}
      </header>
      <Grid>
        <ImageContainer>
          <img src={logo} alt="" />
        </ImageContainer>
        <Header>
          I&#39;m a Front-end Web Developer building sleek web apps.
        </Header>
        <Article>
          <h2>A bit about me</h2>
          <p>
            Last year I was fortunate enough to be in a lockdown and started
            thinking of ways how to fill all these extra hours. Luckily, I found
            out about code!{" "}
          </p>{" "}
          <p>
            I did a few courses, got frustrated, didn't want to see code again,
            the usual staff. But somehow I insisted and things slowly started
            making a little sense.
          </p>
          <p>
            I loved the learning process and the feeling that comes with
            building something by yourself. Bringing ideas to life in the
            browser from an empty folder is amazing!
          </p>
        </Article>
        <SectionFooter>
          Currently, I enjoy working with React and Styled Components having
          things nice and organized and implement best practices. Take a look at
          my <a href="#skills">skills</a> and some of my most recent{" "}
          <a href="#projects">projects</a> below. Here&#39;s my{" "}
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
        </SectionFooter>
      </Grid>
    </StyledAbout>
  );
};

export default About;
