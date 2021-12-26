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

  @media (max-width: 700px) {
    p {
      margin-bottom: 50px;
    }
  }
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;

  @media (max-width: 700px) {
    gap: 80px;
  }
`;

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radiusCard};
  border: 1px solid #999;
  overflow: hidden;
  transition: 0.3s ease;
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  box-shadow: 0 0 10px gray;

  /* &:hover {
    box-shadow: 0 0 20px gray;
  } */

  article {
    padding: 25px;
  }

  h1 {
    font-size: ${({ theme }) => theme.headerSize};
    margin-bottom: 10px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize};
    font-weight: normal;
    min-height: 83.2px;
    margin: 10px 0 20px 0;
  }
`;

export const Stack = styled.div`
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;

  span {
    border-radius: 999px;
    background-color: ${({ theme }) => theme.gray};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize};
  }
`;

export const Links = styled.div`
  list-style: none;
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    display: inline-block;
    padding: 4px 16px;
    transition: 0.3s ease;
    text-align: center;
    border-radius: 999px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize};
    text-align: center;
    border: 2px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }

  a:hover {
    background: ${({ theme }) => theme.accent};
    color: white;
  }

  a:last-child:hover {
    background: ${({ theme }) => theme.green};
    color: white;
    border: 2px solid ${({ theme }) => theme.green};
  }

  a:last-child {
    border: 2px solid ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: 0.3s ease-out;
  }

  img:hover {
    transform: rotate(45deg) scale(1.4);
  }
`;
