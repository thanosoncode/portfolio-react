import {
  ProjectsContainer,
  Grid,
  Card,
  Links,
  Stack,
  Image,
} from "./styles/Projects.styled.js";
import { projectsData } from "../projectsData";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h5>My projects</h5>
      <p>
        These are all self-directed projects in order to get myself familiar
        with different concepts. <br />
        <a href="/">Let me know if you have any questions!</a>
      </p>
      <Grid>
        {projectsData.map((item, index) => {
          const { name, description, stack, source, code, image } = item;
          return (
            <Card key={index}>
              <article>
                <h1>{name}</h1>
                <p>{description}</p>
                <Stack>
                  {stack.map((item, index) => {
                    return <span key={index}>{item}</span>;
                  })}
                </Stack>
                <Links>
                  <a href={code} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                  <a href={source} target="_blank" rel="noreferrer">
                    View Demo
                  </a>
                </Links>
              </article>

              <Image>
                <img src={image} alt="" />
              </Image>
            </Card>
          );
        })}
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
