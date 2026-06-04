import Reveal from "./Reveal";
export default function EventDetail() {
  return (
    <section className="detail-section" id="services">
      <div className="section-bg section-bg-detail" />
      <div className="detail-orbit" />

      <a href="#events" className="back-link">← BACK TO EVENTS</a>

      <div className="detail-date reveal-left">
        <Reveal>
          <strong>24</strong>
          <span>MAY<br />SATURDAY</span>
        </Reveal>
      </div>
      
      <div className="detail-content reveal-up">
        <Reveal>
          <h2>EVENT<br />PRODUCTION</h2>
        </Reveal>
        <Reveal>
          <p className="tag">CORPORATE EVENT EXPERIENCE</p>
        </Reveal>
        <Reveal>
          <div className="meta"><span>⌖ Da Nang, Vietnam</span><span>◷ Concept - Production - Operation</span></div>
        </Reveal>
        <Reveal>
          <p className="detail-copy">Giải pháp tổ chức sự kiện trọn gói tại Đà Nẵng: tư vấn concept, thiết kế sân khấu, âm thanh ánh sáng, LED, nhân sự, timeline và vận hành chương trình cho doanh nghiệp, thương hiệu và tổ chức.</p>
        </Reveal>
        <Reveal>
          <div className="detail-actions"><a className="ticket-btn" href="#contact">GET A QUOTE <span>→</span></a><a className="ghost-btn" href="#services">VIEW SERVICES</a></div>
        </Reveal>
      </div>
      
      <div className="detail-person reveal-right" />
    </section>
  );
}
