import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Amin");
  const [email, setEmail] = useState("amin123@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="16px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiOutlineMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="7"></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>
          <div>{name + "" + email + "" + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Main-image.svg" alt="contact_image" />
      </div>
    </section>
  );
};

export default ContactForm;
