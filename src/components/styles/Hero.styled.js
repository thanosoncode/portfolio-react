import styled from "styled-components";

export const Flex = styled.div`
  max-width: 900px;
  margin: 90px auto 0 auto;
  height: calc(100vh - 90px);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;

  place-items: center;
  grid-template-areas: "image header header header";

  @media (max-width: 720px) {
    margin: 150px auto 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;

    height: auto;
    grid-template-areas:
      "header"
      "image";
    gap: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 450px;
  width: 100%;
  padding: 10px;
  margin: 0;
  text-align: center;
  grid-area: header;

  h4 {
    font-size: ${({ theme }) => theme.titleSize};
    font-weight: 500;
  }

  h1 {
    font-size: ${({ theme }) => theme.mainTitle};
    color: ${({ theme }) => theme.title};
    margin-bottom: 50px;
    width: 100%;
    font-weight: 800;
  }

  h5 {
    font-size: ${({ theme }) => theme.titleSize};
    font-weight: 400;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.radiusCard};
  overflow: hidden;
  grid-area: image;
  width: 330px;
  height: 450px;
  position: relative;
  z-index: 0;
  filter: grayscale(10%);
  background: black;

  border-radius: 50%;
  height: 250px;
  width: 250px;

  img {
    position: absolute;
    z-index: 1;
    /* top: 0;
    left: 0; */
    left: 40px;
    top: -40px;
    /* width: 100%; */

    height: auto;
    object-fit: contain;
    object-position: center;
    border-radius: ${({ theme }) => theme.radiusCard};

    @media (max-width: 720px) {
      left: 40px;
      top: -40px;
    }
  }

  @media (max-width: 720px) {
    grid-row: 2;
    border-radius: 50%;
    height: 250px;
    width: 250px;
  }
`;
