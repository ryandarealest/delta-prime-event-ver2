"use client";

import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

export default function HeroTranscend() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  document.body.classList.toggle("menu-open", menuOpen);

  return () => {
    document.body.classList.remove("menu-open");
  };
}, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <section className="hero" aria-label="Delta Prime Event - công ty tổ chức sự kiện tại Đà Nẵng">
        <div className="layer layer-bg" />
        <div className="layer layer-vignette" />
        <div className="layer layer-nebula" />
        <div className="layer layer-grain" />

        <header className="topbar">
          <a href="#" className="brand-logo" aria-label="Delta Prime Event home">
            <Image
              src="/images/logo.png"
              alt="Delta Prime Event logo"
              width={50}
              height={45}
              priority
            />
          </a>

          <nav className="nav-left" aria-label="Primary navigation">
            <a href="#events">EVENTS</a>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <div className="nav-right" aria-label="Actions">
            <button aria-label="Favorite" className="icon-btn">♡</button>
            <button aria-label="Search" className="search-icon" />
            <a href="#contact" className="explore">GET A QUOTE</a>
          </div>

          
        </header>

        <h1 className="hero-title">
          <span className="title-left">DELTA</span>
          <span className="title-right">PRIME</span>
        </h1>

        <div className="person-wrap" aria-hidden="true">
          <div className="person" />
        </div>

        <aside className="left-copy">
          <p className="copy-title">Event Experiences in Da Nang</p>
          <p className="copy-body">
            Delta Prime Event chuyên tổ chức sự kiện doanh nghiệp, hội nghị, hội thảo, khai trương, activation, roadshow và gala dinner tại Đà Nẵng.
          </p>
        </aside>

        <p className="credit">@delta.prime</p>
      </section>
      <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
      <div
        className={`sidebar-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />
      <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <button
          type="button"
          className="mobile-close-btn"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ×
        </button>

        <a href="#events" onClick={closeMenu}>EVENTS</a>
        <a href="#services" onClick={closeMenu}>SERVICES</a>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
        <a href="#contact" className="sidebar-quote" onClick={closeMenu}>
          GET A QUOTE
        </a>
      </aside>
      <div className="section-divider" />
    </main>
  );
}