import styled from "styled-components";

export const Flex = styled.div`
  max-width: 1100px;
  margin: 90px auto 0 auto;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  /* background: gray; */

  h1 {
    font-size: ${({ theme }) => theme.mainTitle};
    color: ${({ theme }) => theme.accent};
    margin: 130px 0 30px 0;
    width: 100%;
    font-weight: 800;
    font-size: ${({ theme }) => theme.mainTitle};
    text-align: center;
  }

  @media (max-width: 950px) {
    height: auto;
  }

  @media (max-width: 550px) {
    height: auto;

    h1 {
      font-size: ${({ theme }) => theme.mobileMainTitle};
      margin: 20px 0;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  height: 450px;
  width: 100%;
  padding: 10px;
  margin: 0;
  margin-top: 20px;
  text-align: center;

  h3 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.secondaryTitle};
    width: 100%;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  h5 {
    font-size: ${({ theme }) => theme.links};
    font-weight: 400;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    height: auto;
    align-items: center;

    h3,
    h5 {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 550px) {
    h3 {
      font-size: ${({ theme }) => theme.secondaryTitle};
      margin: 0 0 10px 0;
    }

    h5 {
      font-size: ${({ theme }) => theme.links};
    }
  }
`;

export const ImageContainer = styled.div`
  width: 220px;
  height: 220px;
  margin-right: 20px;

  @media (max-width: 550px) {
    width: 190px;
    height: 190px;
  }

  img {
    width: 100%;
  }
`;
