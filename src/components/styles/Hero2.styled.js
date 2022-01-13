import styled from "styled-components";

export const Flex = styled.div`
  max-width: 740px;
  margin: 90px auto 0 auto;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0px;
  margin: 200px auto 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  border-radius: ${({ theme }) => theme.radiusCard};
  height: 450px;
  width: 330px;
  padding: 10px;
  margin: 0;

  h4 {
    font-size: ${({ theme }) => theme.titleSize};
    font-weight: 500;
  }

  h1 {
    font-size: ${({ theme }) => theme.mainTitle};
  }

  h5 {
    font-size: ${({ theme }) => theme.headerSize};
    font-weight: 400;
    width: 100%;
    margin-bottom: 20px;
    /* border-radius: ${({ theme }) => theme.radiusCard};
    color: white;
    background: black;
    padding: 5px; */
  }
`;

export const ImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.radiusCard};
  overflow: hidden;
  height: 450px;
  width: 330px;
  /* min-height: 450px;  */
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
    object-position: center;
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
