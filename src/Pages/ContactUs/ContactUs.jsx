import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import { IconLocation } from "@tabler/icons-react";
import './ContactUs.css'

// Imprted layout
import MainLayout from "../Layout/Layout";

function Contact() {
  return (
    <MainLayout>
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam id corrupti nobis, fugit nostrum ex ut odit maxime distinctio! Quibusdam est necessitatibus eligendi aspernatur perferendis illum, voluptatibus numquam quo quisquam nihil? Aperiam, provident magnam.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; (123) 456-7869
              </a>
              <a href="/">
                <IconMail /> &nbsp; adventph@gmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Rizal, Philippines
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Aljune Maunes"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </MainLayout>
  );
}

export default Contact;