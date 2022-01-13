import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg};
  padding: 20px 0 30px 0;
  font-size: ${({ theme }) => theme.headerSize};
  text-align: center;
  margin-top: 100px;
  border-top: 1px solid ${({ theme }) => theme.color};
  border-bottom: 1px solid ${({ theme }) => theme.color};

  h4 {
    display: block;
    border-radius: ${({ theme }) => theme.radiusCard};
    background: ${({ theme }) => theme.color};
    border: 1px solid black;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    /* color: ${({ theme }) => theme.bg}; */
    color: white;

    @media (max-width: 720px) {
      width: 300px;
    }
  }

  article {
    max-width: 968px;
    margin: 0 auto;
    text-align: center;
    padding-top: 20px;
  }

  p {
    line-height: 30px;
    margin: 20px;
  }

  a {
    font-size: ${({ theme }) => theme.links};
    color: ${({ theme }) => theme.title};

    text-decoration: underline;
  }

  span {
    font-size: ${({ theme }) => theme.links};
    color: ${({ theme }) => theme.title};
  }

  @media (max-width: 720px) {
    margin-top: 100px;

    p {
      margin: 20px 5px;
    }
  }
`;

export const SectionFooter = styled.p`
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
