import styled from "styled-components";

export const StyledAbout = styled.section`
  max-width: 740px;
  margin: 140px auto 40px auto;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    @media (max-width: 450px) {
      flex-direction: column;
    }
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
    margin: 100px auto 40px auto;
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
  min-height: 500px;
  position: relative;
  z-index: 0;

  img {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: top;
    border-radius: ${({ theme }) => theme.radiusCard};
  }

  @media (max-width: 700px) {
    min-width: 384px;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    min-width: 354px;
    margin-bottom: 20px;
  }
`;

export const Article = styled.section`
  grid-area: article;

  h2 {
    color: ${({ theme }) => theme.title};
    font-size: ${({ theme }) => theme.titleSize};
    text-align: center;
  }
  p {
    margin: 10px 0;
    line-height: 28px;
    text-align: justify;
  }
  @media (max-width: 700px) {
    p {
      margin: 5px 0;
    }
    h2 {
      margin: 15px 0;
    }
    margin-top: 20px;
  }
`;

export const Header = styled.div`
  grid-area: header;
  border-radius: ${({ theme }) => theme.radiusCard};
  background-color: ${({ theme }) => theme.header};
  color: white;
  padding: 25px;
  font-size: ${({ theme }) => theme.headerSize};
  line-height: 34px;
  text-align: center;
`;

export const SectionFooter = styled.p`
  grid-area: footer;

  margin-top: -20px;
  line-height: 28px;
  text-align: justify;

  a {
    font-weight: 600;
    cursor: pointer;
    color: ${({ theme }) => theme.color};
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    margin-top: 0;
  }
`;
