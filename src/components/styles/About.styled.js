import styled from "styled-components";

export const StyledAbout = styled.section`
  max-width: 740px;
  margin: 40px auto;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  h1 {
    text-align: center;
    font-weight: 900;
    font-family: "Play", sans-serif;
    font-size: ${({ theme }) => theme.mainTitle};
  }
  span {
    font-size: ${({ theme }) => theme.mainTitle};
    margin-left: 10px;
  }

  @media (max-width: 800px) {
    padding: 0 15px;
  }
`;

export const Grid = styled.section`
  display: grid;
  row-gap: 20px;
  column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 0.6fr 0.6fr 0.3fr;
  grid-template-areas:
    "image header"
    "image article"
    "image article"
    "footer footer";

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.radiusCard};
  overflow: hidden;
  grid-area: image;
  min-width: 330px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radiusCard};
  }
`;

export const Article = styled.section`
  grid-area: article;

  h2 {
    color: ${({ theme }) => theme.title};
    font-size: ${({ theme }) => theme.titleSize};
  }
  p {
    margin: 30px 0;
    line-height: 28px;
  }
  @media (max-width: 700px) {
    p {
      margin: 5px 0;
    }
  }
`;

export const Header = styled.div`
  grid-area: header;
  border-radius: ${({ theme }) => theme.radiusCard};
  background-color: ${({ theme }) => theme.header};
  color: white;
  padding: 25px;
  font-size: ${({ theme }) => theme.headerSize};
`;

export const SectionFooter = styled.p`
  grid-area: footer;
  @media (max-width: 700px) {
    margin-top: -20px;
  }
`;
