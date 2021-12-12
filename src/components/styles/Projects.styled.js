import styled from "styled-components";

export const ProjectsContainer = styled.div`
  max-width: 740px;
  margin: 0 auto;

  p {
    margin: 30px 0;
    color: ${({ theme }) => theme.title};
    font-weight: 800;
  }

  @media (max-width: 800px) {
    padding: 0 15px;
  }
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radiusCard};
  border: 1px solid #999;
  overflow: hidden;
  transition: 0.3s ease;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  box-shadow: 0 0 10px gray;

  &:hover {
    box-shadow: 0 0 10px red;
  }

  article {
    padding: 25px;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Stack = styled.div`
  margin: 15px 0;
  span {
    margin-right: 15px;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.gray};
    padding: 4px 12px;
  }
`;

export const Links = styled.ul`
  list-style: none;
  margin: 30px 0 40px 0;
  display: flex;

  li a {
    color: ${({ theme }) => theme.accent};
    font-weight: 500;
    margin-right: 15px;
  }

  li:hover {
    transform: scale(1.025);
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
