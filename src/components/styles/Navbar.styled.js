import styled from "styled-components";

export const StyledNavbar = styled.nav`
  max-width: 90vw;
  margin: 0 auto;
  padding: 25px 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    background-color: #ddd;
    height: 30px;
    width: 1px;
    margin: 0 5px;
  }
  @media (max-width: 600px) {
    padding: 15px;
  }
`;
export const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 10px;

  transition: transform 0.3s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledSocials = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    padding: 5px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize};
  }

  li a {
    color: ${({ theme }) => theme.color};
  }

  li:hover {
    opacity: 0.8;
    transition: transform 0.3s ease-in;
  }
  @media (max-width: 700px) {
    li {
      font-size: ${({ theme }) => theme.links};
    }
  }
`;
export const Links = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
      display: none;
    }
  }
  li {
    margin-left: 30px;
    cursor: pointer;
    font-weight: 500;
    transition: transform 0.3s ease-in;
    font-size: ${({ theme }) => theme.fontSize};
  }

  li a {
    color: ${({ theme }) => theme.color};
  }

  li:hover {
    opacity: 0.8;
  }

  li:last-child {
    display: none;
    @media (max-width: 700px) {
      display: block;
    }
  }
  @media (max-width: 700px) {
    li {
      font-size: ${({ theme }) => theme.links};
    }
  }
`;

export const Modal = styled.div`
  position: absolute;
  width: 200px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid #aaa;
  border-radius: ${({ theme }) => theme.radiusBtn};
  box-shadow: 1px 1px 3px 1px #aaa;
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => props.opacity};
  transition: 0.3s ease;
  background-color: ${({ theme }) => theme.modal};
  color: ${({ theme }) => theme.title};

  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 15px;
  }

  section:first-child {
    border-bottom: 1px solid #aaa;
  }

  p {
    font-weight: 400;
    font-size: 0.9rem;
  }
`;

export const SwitchContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.color};
  width: 38px;
  height: 18px;
  border-radius: 999px;

  div {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 1px;
    border-radius: 100%;
    background-color: white;
    cursor: pointer;
    border: 1px solid #777;
    transition: 0.3s ease;
    transform: ${(props) => props.move};
  }
`;

export const Letter = styled.div`
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: ${({ theme }) => theme.radiusBtn};
  padding: 1px 5px 3px 5px;
  font-weight: 700;
  cursor: pointer;
`;

export const Triangle = styled.div`
  position: absolute;
  top: -6px;
  left: 88%;
  width: 12px;
  height: 12px;
  transform: rotate(-45deg);
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
  background-color: ${({ theme }) => theme.modal};
`;

export const MobileLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-left: 10px;
    cursor: pointer;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize};
    transition: transform 0.3s ease-in;
  }

  div:hover {
    opacity: 0.8;
  }
`;

export const MobileMenu = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 100px;
  left: 0;
  list-style: none;
  background-color: ${({ theme }) => theme.bg};
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => props.opacity};
  transition: 0.4s ease;
  padding-top: 30px;

  li {
    margin-left: 30px;
    margin-bottom: 5px;
    cursor: pointer;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize};
  }

  li a {
    color: ${({ theme }) => theme.color};
    font-size: ${(theme) => theme.fontSize};
  }

  li:hover {
    opacity: 0.8;
    transition: transform 0.3s ease-in;
  }
`;
