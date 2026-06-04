import {
  FaInstagram,
  FaBehance,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site";

export default function TranscendFooter() {
  return (
    <footer className="trans-footer" id="contact">
      {/* <div className="footer-bg-person" /> */}

      <Reveal>
        <div className="footer-brand">
          <div className="footer-brand-head">
            <img
              src="/images/logo.png"
              alt="Delta Prime Event logo"
              className="footer-logo"
            />
            <Reveal>
              <h2>DELTA PRIME EVENT</h2>
            </Reveal>
          </div>

          <Reveal>
            <p>CREATE UNFORGETTABLE EVENT EXPERIENCES</p>
          </Reveal>
          <Reveal>
            <p>Liên hệ Delta Prime Event để tư vấn tổ chức sự kiện doanh nghiệp, hội nghị, hội thảo, khai trương, activation, roadshow và gala dinner tại Đà Nẵng.</p>
          </Reveal>
          
          <Reveal>
          <div className="mailbox">
            <input type="email" placeholder="Your email address" aria-label="Email nhận tư vấn sự kiện" />
            <button aria-label="Gửi email tư vấn">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          </Reveal>
        </div>
      </Reveal>

      <div className="footer-divider" />
      <Reveal>
        <div className="footer-col">
          <h3>SERVICES</h3>
          <a href="#services">Corporate Event</a>
          <a href="#services">Conference & Seminar</a>
          <a href="#services">Activation & Roadshow</a>
          <a href="#contact">Get a Quote</a>
        </div>
      </Reveal>
      <Reveal>
        <div className="footer-col">
          <h3>COMPANY</h3>
          <a href="#about">About Us</a>
          <a href="#events">Portfolio</a>
          <a href="#detail">Event Production</a>
          <a href="#contact">Contact</a>
        </div>
      </Reveal>
      <Reveal>
        <div className="footer-col">
          <h3>CONTACT</h3>
          <a>Hải Châu, Đà Nẵng</a>
          <a>{siteConfig.email}</a>
          <a>{siteConfig.phone}</a>
          <a>Việt Nam</a>
        </div>
      </Reveal>
      <Reveal>
        <div className="newsletter">

          <Reveal>
            <h3 className="footer-slogan">GUIDED BY THE DELTA.</h3>
          </Reveal>

          <Reveal>
            <p>
              Công ty tổ chức sự kiện tại Đà Nẵng, chuyên event production, hội nghị, hội thảo, khai trương, activation, roadshow và gala dinner.
            </p>
          </Reveal>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Behance">
              <FaBehance />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="#" aria-label="Youtube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="Spotify">
              <FaSpotify />
            </a>
          </div>
        </div>
      </Reveal>
      <div className="footer-bottom">
        © 2026 Delta Prime Event. Event Production Agency in Da Nang, Vietnam.
      </div>
    </footer>
  );
}
