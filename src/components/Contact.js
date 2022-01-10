import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal";
import {
  ContactContainer,
  Form,
  Button,
  ModalContainer,
} from "./styles/Contact.styled";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [message, setMessage] = useState(
    "Message sent! We will be in touch soon."
  );

  const textAreaRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (textAreaRef.current.value) {
      emailjs
        .sendForm(
          "service_vqxbpy4",
          "template_faen34o",
          e.target,
          "user_bm37QJFLQoyKqlOoNcG0e"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setMessage("Thank you for your message! We will be in touch soon.");
      setMessageSent(true);
    } else {
      setMessage("Message cannot be empty.");
      setMessageSent(true);
    }
  };

  return (
    <ContactContainer id="contact">
      <Form onSubmit={sendEmail}>
        <h4>Let&#39;s talk!</h4>
        <p>
          I would be happy to help you with your organization or your project,
          or answer any of your questions!
          <br /> <br /> Please, share your ideas and we will figure out how we
          can make them true.
        </p>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea
          name="message"
          id="message"
          className="textarea"
          placeholder="Message"
          ref={textAreaRef}
        ></textarea>
        <Button type="submit">Send Message</Button>
      </Form>
      <ModalContainer
        visibility={messageSent ? "visible" : "hidden"}
        opacity={messageSent ? "1" : "0"}
      >
        <Modal message={message} setMessageSent={setMessageSent} />
      </ModalContainer>
    </ContactContainer>
  );
};

export default Contact;
