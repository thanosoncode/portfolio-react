import { StyledModal, Button } from "./styles/Contact.styled";

const Modal = ({ message, setMessageSent }) => {
  return (
    <StyledModal>
      <h4>{message}</h4>
      <Button onClick={() => setMessageSent(false)}>Close</Button>
    </StyledModal>
  );
};

export default Modal;
