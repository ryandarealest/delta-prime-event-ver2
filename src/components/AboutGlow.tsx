import Reveal from "./Reveal";
const items = [
  ['✦', 'CORPORATE EVENT', 'Tổ chức sự kiện doanh nghiệp, year-end party, gala dinner và sự kiện thương hiệu.'],
  ['◇', 'CONFERENCE', 'Thiết kế và vận hành hội nghị, hội thảo, seminar, talkshow chuyên nghiệp.'],
  ['◌', 'ACTIVATION', 'Triển khai activation, roadshow, khai trương và ra mắt sản phẩm tại Đà Nẵng.'],
];

export default function AboutGlow() {
  return (
    <section className="about-section" id="about">
      <div className="section-bg section-bg-about" />
      <Reveal>
        <div className="about-hand" />
      </Reveal>

      <div className="about-content reveal-up">
        <Reveal>
          <p className="eyebrow">ABOUT</p>
        </Reveal>
        <Reveal>
          <h2>ABOUT <br /> DELTA PRIME EVENT</h2>
        </Reveal>
        <Reveal>
          <p className="about-lead">Delta Prime Event là đơn vị tổ chức sự kiện tại Đà Nẵng, chuyên event production, concept, sân khấu, âm thanh ánh sáng, nhân sự vận hành và trải nghiệm thương hiệu.</p>
        </Reveal>

        <Reveal>
        <div className="about-features">
          {items.map(([icon, title, text]) => (
            <div className="feature" key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        </Reveal>
        <Reveal>
        <div className="stats-panel">
          <Reveal><div><strong>25+</strong><span>EVENTS</span></div></Reveal>
          <Reveal><div><strong>120K+</strong><span>ATTENDEES</span></div></Reveal>
          <Reveal><div><strong>18</strong><span>VENUES</span></div></Reveal>
          <Reveal><div><strong>∞</strong><span>IDEAS</span></div></Reveal>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
