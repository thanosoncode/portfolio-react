import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.bg};
  border-bottom: 1px solid #ccc;
`;

export const StyledNavbar = styled.nav`
  max-width: 90vw;
  margin: 0 auto;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    background-color: #ddd;
    height: 30px;
    width: 1px;
    margin: 0 5px;
  }
  @media (max-width: 600px) {
    padding: 10px 15px;
    max-width: 100vw;
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
  position: relative;
  background: black;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position: absolute;
    top: -5px;
    left: 10px;
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
    font-size: ${({ theme }) => theme.links};
  }

  li a {
    color: ${({ theme }) => theme.color};
  }

  li:hover {
    opacity: 0.8;
    transition: transform 0.3s ease-in;
  }
`;

export const Links = styled.div`

  span {
    margin-left: 30px;
    cursor: pointer;
    font-weight: 800;
    transition: transform 0.3s ease-in;
    font-size: ${({ theme }) => theme.links};
   
  }

  span:last-child{
    padding:3px 13px;
    border: 2px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.color};
    border-radius: ${({ theme }) => theme.radiusBtn};
    transition:0.3s ease;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: ${({ theme }) => theme.fontSize};
    background-color:${({ theme }) => theme.accent};
    font-weight:400;
    
  }

  span:last-child:hover{
    background-color:${({ theme }) => theme.accentDark};
  }
 
span a {
  color:white;
}

  span:hover {
    opacity: 0.8;
  } 

  }
  @media (max-width: 700px) {
    span {
      margin-left:20px;
    }

    span:last-child{
      padding:3px 8px;
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

  h5 {
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
  left: 160px;
  width: 12px;
  height: 12px;
  transform: rotate(-45deg);
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
  background-color: ${({ theme }) => theme.modal};
  transition: 0.3s ease;
`;

export const MobileLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-left: 10px;
    cursor: pointer;
    font-weight: 500;
    font-size: ${({ theme }) => theme.links};
    transition: transform 0.3s ease-in;
  }

  div:hover {
    opacity: 0.8;
  }
`;

export const MobileMenu = styled.ul`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 100px;
  left: 0;
  z-index: ${({ z }) => z};
  list-style: none;
  background: white;
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
