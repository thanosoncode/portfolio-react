import {
  StyledAbout,
  Header,
  ImageContainer,
  Grid,
  Article,
  SectionFooter,
} from "./styles/About.styled.js";
import logo from "../assets/profile1.png";

const About = () => {
  return (
    <StyledAbout>
      <header>
        <h1>Hi, I&#39;m Thanos </h1>
        <span>👋</span>
      </header>
      <Grid>
        <ImageContainer>
          <img src={logo} alt="" />
        </ImageContainer>
        <Header>I&#39;m a Front-end Web Developer</Header>
        <Article>
          <h2>A bit about me</h2>
          <p>
            Last year I was fortunate enough to be in a lockdown and started
            thinking of ways how to fill all these extra hours. Luckily, I found
            out about code!{" "}
          </p>{" "}
          <p>
            I did a few courses, got frustrated, didn't want to see code again,
            the usual staff.
          </p>{" "}
          <p>
            But somehow I insisted and things slowly started making a little
            sense.
          </p>
          <p>
            I loved the learning process and the feeling that comes with
            building something by yourself.
          </p>
        </Article>
        <SectionFooter>
          Bringing ideas to life in the browser from an empty folder is amazing!
          <br />
          <br />
          Currently, I enjoy working with React and Styled Components having
          things nice and organized and implement best practices.
        </SectionFooter>
      </Grid>
    </StyledAbout>
  );
};

export default About;
