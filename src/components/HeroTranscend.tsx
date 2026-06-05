"use client";
import Navbar from "./Navbar";

export default function HeroTranscend() {

  return (
    <main className="site-shell">
      <Navbar />
      <section className="hero" aria-label="Delta Prime Event - công ty tổ chức sự kiện tại Đà Nẵng">
        <div className="layer layer-bg" />
        <div className="layer layer-vignette" />
        <div className="layer layer-nebula" />
        <div className="layer layer-grain" />

        
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
      
      <div className="section-divider" />
    </main>
  );
}