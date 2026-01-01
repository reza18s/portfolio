import { useState } from "react";
import { Send } from "lucide-react";
import ArticleHeader from "./ArticleHeader";

function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = fullname.trim() && email.trim() && message.trim();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert("Message sent (demo)");
    setFullname("");
    setEmail("");
    setMessage("");
  };

  return (
    <article className="contact active" data-page="contact">
      <ArticleHeader title="Contact" />
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218010.74373375502!2d48.505440490611804!3d31.375039497603186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc3df8b8d29bbf5%3A0x4968f1dd5789625c!2sAhvaz%2C%20Khuzestan%20Province%2C%20Iran!5e0!3m2!1sen!2sfi!4v1767097898132!5m2!1sen!2sfi"
            width={400}
            height={300}
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form" data-form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="form-btn"
            type="submit"
            disabled={!canSubmit}
            data-form-btn
          >
            <Send size={16} aria-hidden="true" focusable={false} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
