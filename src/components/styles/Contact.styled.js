import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 740px;
  margin: 120px auto;

  background-color: ${({ theme }) => theme.accentLight};
  padding: 70px 90px;
  border-radius: ${({ theme }) => theme.radiusCard};
  p {
    margin: 15px 0 20px 0;
  }
  @media (max-width: 800px) {
    margin: 120px 15px;
    padding: 30px 30px;
  }
  @media (max-width: 700px) {
    padding: 30px 10px 50px 10px;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  input,
  textarea {
    margin-bottom: 10px;
    padding-left: 10px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: ${({ theme }) => theme.radiusBtn};
    background-color: ${({ theme }) => theme.inputs};
  }

  input,
  button {
    height: 40px;
  }

  textarea {
    height: 120px;
    resize: vertical;
    padding-top: 10px;
    margin-bottom: 20px;
  }

  textarea::placeholder {
    font-family: "Roboto slab", sans-serif;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: white;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;
  font-size: 18px;
  border-radius: ${({ theme }) => theme.radiusBtn};
  &:hover {
    background-color: ${({ theme }) => theme.colorLight};
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => props.opacity};
`;

export const Modal = styled.div`
      border-radius:${({ theme }) => theme.radiusCard}}
      border:1px solid ${({ theme }) => theme.color}}
      background-color:white;
      text-align:center;
      padding:40px 60px;
      transition:0.3s ease;
      /* box-shadow: 0 0 8px #ddd; */

      &:hover {
        box-shadow: 0 0 3px #ddd;
      }

      button{
        padding:6px 14px;
        margin-top:20px;
      }
`;
