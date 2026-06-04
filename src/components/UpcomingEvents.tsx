import Image from "next/image";
import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
const events = [
  { day: '24', month: 'MAY', title: 'DELTA NIGHT', type: 'EVENT PRODUCTION', place: 'Đà Nẵng, Việt Nam', image: '/images/event-1.jpg', alt: 'Delta Prime Event tổ chức sự kiện doanh nghiệp tại Đà Nẵng' },
  { day: '08', month: 'JUN', title: 'BRAND LAUNCH', type: 'PRODUCT LAUNCH', place: 'Đà Nẵng, Việt Nam', image: '/images/event-2.jpg', alt: 'Tổ chức sự kiện ra mắt sản phẩm tại Đà Nẵng' },
  { day: '21', month: 'JUN', title: 'CITY ACTIVATION', type: 'ACTIVATION & ROADSHOW', place: 'Đà Nẵng, Việt Nam', image: '/images/event-3.jpg', alt: 'Tổ chức activation và roadshow tại Đà Nẵng' },
];

export default function UpcomingEvents() {
  return (
    <section className="event-section" id="events">
      <div className="section-bg section-bg-events" />
      <div className="section-glow" />
      <Reveal>
      <div className="events-intro reveal-up">
        <Reveal>
          <p className="eyebrow">EVENTS</p>
        </Reveal>
        <Reveal>
          <h2>UPCOMING<br />EVENTS</h2>
        </Reveal>
        <Reveal>
          <span className="line" />
        </Reveal>
        <Reveal>
          <p className="intro-text">Delta Prime Event cung cấp giải pháp tổ chức sự kiện doanh nghiệp, hội nghị, hội thảo, khai trương, activation, roadshow và gala dinner tại Đà Nẵng.</p>
        </Reveal>
        <Reveal>
          <a className="pill-btn" href="#detail">VIEW EVENT SERVICE <span>→</span></a>
        </Reveal>
      </div>
      </Reveal>
      
      <Reveal>
      <div className="event-cards">
        {events.map((event, index) => (
          <article className="event-card reveal-up" style={{ '--delay': `${index * 120}ms` } as CSSProperties} key={event.title}>
            <div className="date-box"><b>{event.day}</b><span>{event.month}</span></div>
            <div className="event-img">
              <Image src={event.image} alt={event.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="event-card-content">
              <h3>{event.title}</h3>
              <p>{event.type}</p>
              <div className="event-bottom"><span>⌖ {event.place}</span><a href="#detail" aria-label={`Xem chi tiết ${event.title}`}>→</a></div>
            </div>
          </article>
        ))}
      </div>
      </Reveal>
    </section>
  );
}
