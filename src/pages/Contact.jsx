import { useState } from "react";
import Seo from "../components/Seo";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.target.reset();
  }

  return (
    <section className="contact-page">
      <Seo
        title="Contact Us | AutoVibe"
        description="Have a question or suggestion? Send a message to the AutoVibe team."
      />

      <div className="contact-heading">
        <span>GET IN TOUCH</span>
        <h1>
          Contact <span>Us</span>
        </h1>
        <p>Have a question or suggestion? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Talk About Cars!</h2>
          <p>
            Whether you have a question about our articles, automotive
            technology or suggestions, feel free to send us a message.
          </p>

          <div className="contact-point">
            <h3>Our Purpose</h3>
            <p>Sharing automotive knowledge and information.</p>
          </div>

          <div className="contact-point">
            <h3>Our Platform</h3>
            <p>Car Reviews | Maintenance | Electric Vehicles</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Subject</label>
          <input type="text" placeholder="Enter subject" required />

          <label>Your Message</label>
          <textarea placeholder="Write your message..." rows="5" required />

          <button type="submit">Send Message →</button>

          {sent && (
            <p className="success-message">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
