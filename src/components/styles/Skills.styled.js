import styled from "styled-components";

export const StyledSkills = styled.div`
  max-width: 740px;
  margin: 80px auto 120px auto;

  p {
    margin: 40px 0;
    font-weight: 800;
    color: ${({ theme }) => theme.title};
  }

  p {
    margin-bottom: 30px;
  }

  @media (max-width: 800px) {
    padding: 0 15px;
  }
`;
export const Flex = styled.div`
  background-color: ${({ theme }) => theme.gray};
  border-radius: ${({ theme }) => theme.radiusCard};

  margin: 0 auto;
  display: flex;
  padding: 30px 40px;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p {
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.title};
  }

  @media (max-width: 700px) {
    padding: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    row-gap: 50px;
    background: none;
  }
`;
export const Image = styled.div`
  width: 60px;
  height: 60px;
  background: transparent;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
