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
        <Header>I&#39;m a front-end web developer</Header>
        <Article>
          <h2>A bit about me</h2>
          <p>
            I create successful responsive websites that are fast, easy to use
            and built with best practices. The main area of expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, coding interactive layouts.
          </p>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
        </Article>
        <SectionFooter>
          I love coding and the feeling that comes with building something by
          yourself. When I build something new, I usually learn something in the
          process.
        </SectionFooter>
      </Grid>
    </StyledAbout>
  );
};

export default About;
