import styled from "styled-components";

export const Header = styled.header`
  margin-top: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: calc(100vh - 90px);

  h1 {
    font-size: ${({ theme }) => theme.mainTitle};
    margin-bottom: 50px;
  }

  h5 {
    font-size: ${({ theme }) => theme.titleSize};
    margin-bottom: 100px;
  }

  div {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 0 9px white, 0 0 0 13px black;
    overflow: hidden;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
