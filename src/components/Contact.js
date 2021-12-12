import { useState } from "react";
import emailjs from "emailjs-com";
import {
  ContactContainer,
  Form,
  Button,
  ModalContainer,
  Modal,
} from "./styles/Contact.styled";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

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
    setMessageSent(true);
  };

  return (
    <ContactContainer id="contact">
      <Form onSubmit={sendEmail}>
        <h4>Let&#39;s get in touch.</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          quis! Eligendi odio ipsam corporis perspiciatis.
        </p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          className="textarea"
          placeholder="Message"
        ></textarea>
        <Button type="submit">Send Message</Button>
      </Form>
      <ModalContainer
        visibility={messageSent ? "visible" : "hidden"}
        opacity={messageSent ? "1" : "0"}
      >
        <Modal>
          <h4>Message sent! Thank you very much.</h4>
          <Button onClick={() => setMessageSent(false)}>Close</Button>
        </Modal>
      </ModalContainer>
    </ContactContainer>
  );
};

export default Contact;
