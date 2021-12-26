import {
  ProjectsContainer,
  Grid,
  Card,
  Links,
  Stack,
  Image,
} from "./styles/Projects.styled.js";
import { projectsData } from "./projectsData";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <p>My projects</p>
      <Grid>
        {projectsData.map((item, index) => {
          const { name, description, stack, source, code, image } = item;
          return (
            <Card key={index}>
              <article>
                <h1>{name}</h1>
                <p>{description}</p>

                <Links>
                  <li>
                    <a href={source} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </li>
                  <li>
                    <a href={code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </li>
                </Links>
                <Stack>
                  {stack.map((item, index) => {
                    return <span key={index}>{item}</span>;
                  })}
                </Stack>
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
