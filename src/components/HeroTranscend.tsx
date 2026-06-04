import Image from "next/image";
export default function HeroTranscend() {
  return (
    <main className="site-shell">
      <section className="hero" aria-label="Delta Prime Event - công ty tổ chức sự kiện tại Đà Nẵng">
        {/* LAYER 1: background gốc - thay ảnh tại public/images/bg.jpg */}
        <div className="layer layer-bg" />

        {/* atmospheric layers */}
        <div className="layer layer-vignette" />
        <div className="layer layer-nebula" />
        <div className="layer layer-grain" />

        {/* UI layer */}
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

        {/* LAYER 2: chữ nền */}
        <h1 className="hero-title">
          <span className="title-left">DELTA</span>
          <span className="title-right">PRIME</span>
        </h1>

        {/* LAYER 3: ảnh người PNG tách nền - thay ảnh tại public/images/person.png */}
        <div className="person-wrap" aria-hidden="true">
          <div className="person" />
        </div>

        {/* text content cùng cấp layer với người */}
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
