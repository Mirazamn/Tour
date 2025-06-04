import './style.css'

import { FaThreads } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Modal({ CloseModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={()=> CloseModal(false)} className="close-btn">
          &times;
        </button>
        <h1 className="modal-title">Boshladik!</h1>

        <form>
          <input
            type="text"
            placeholder="Ismingiz"
            className="email-input"
            required
          />

          <input
            type="tel"
            placeholder="Telefon Raqam"
            className="email-input"
            required
          />
          <button type='submit' className="subscribe-btn">Yuborish</button>
        </form>

        <p className="follow-text">Bizni kuzatib boring</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noreferrer">
            <FaTelegram />
          </a>
          <a href="https://www.threads.com" target="_blank" rel="noreferrer">
            <FaThreads />
          </a>
        </div>

        <div className="contact-info">
          <a href="tel:+998900482255" className='follow-text'> <p><strong>Telefon:</strong> +123 45 678 90 12</p> </a>
          <a href="mailto:hello@example.com" className='follow-text'> <p><strong>Email:</strong> hello@example.com </p> </a>
        </div>
      </div>
    </div>
  )
}

export default Modal;