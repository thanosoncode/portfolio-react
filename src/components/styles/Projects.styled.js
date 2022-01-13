import styled from "styled-components";

export const ProjectsContainer = styled.div`
  max-width: 740px;
  margin: 0 auto;

  h5 {
    margin: 30px 0 50px 0;
    color: ${({ theme }) => theme.title};
    font-weight: 800;
    font-size: ${({ theme }) => theme.titleSize};
    text-align: center;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize};
    margin-bottom: 60px;
  }

  a {
    color: ${({ theme }) => theme.color};
    font-weight: 600;
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
  box-shadow: 0 0 10px gray;
  overflow: hidden;
  transition: 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;

  article {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 60%;
  }

  h1 {
    font-size: ${({ theme }) => theme.headerSize};
    margin-bottom: 10px;
    color: ${({ theme }) => theme.title};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize};
    font-weight: normal;
    min-height: 83.2px;
    margin: 10px 0 20px 0;
    text-align: center;
  }
`;

export const Stack = styled.div`
  margin: 5px 0 35px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;

  span {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize};
    color: ${({ theme }) => theme.title};
    padding: 0 5px;
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
    border: 2px solid ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.color};
    margin: 0 5px;
  }

  a:hover {
    background: ${({ theme }) => theme.color};
    color: white;
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
