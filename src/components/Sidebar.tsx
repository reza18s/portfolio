import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
  Download,
} from "lucide-react";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar ${open ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/assets/images/my-avatar.png"
            alt="Richard hanrick"
            width={80}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Reza Saeidavi">
            Reza Saeidavi
          </h1>
          <p className="title">Web developer</p>
        </div>

        <a
          href="/assets/CV-Des-30.pdf"
          className="form-btn h-10 transition-all duration-300"
          download
          aria-label="Download resume"
        >
          <Download size={16} aria-hidden="true" focusable={false} />
          <span>Download Resume</span>
        </a>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={() => setOpen(!open)}
        >
          <span>Show Contacts</span>
          <ChevronDown size={16} aria-hidden="true" focusable={false} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={16} aria-hidden="true" focusable={false} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:swary2021@gmail.com" className="contact-link">
                swary2021@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={16} aria-hidden="true" focusable={false} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+989365261859" className="contact-link">
                +98 936 526 1859
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Calendar size={16} aria-hidden="true" focusable={false} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2006-08-23">Aug 23, 2006</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={16} aria-hidden="true" focusable={false} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Ahvaz, Khuzestan, Iran</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://github.com/reza18s"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub: reza18s"
            >
              <Github size={16} aria-hidden="true" focusable={false} />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://t.me/reza19s"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram: reza19s"
            >
              <Send size={16} aria-hidden="true" focusable={false} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
