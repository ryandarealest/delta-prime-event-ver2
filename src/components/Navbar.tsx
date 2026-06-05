"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("menu-open", menuOpen);
        document.body.classList.toggle("menu-open", menuOpen);

        return () => {
            document.documentElement.classList.remove("menu-open");
            document.body.classList.remove("menu-open");
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className={`topbar ${scrolled ? "scrolled" : ""}`}>

                <div className="brand-wrap">
                    <a href="#" className="brand-logo" aria-label="Delta Prime Group home">
                        <Image
                            src="/images/logo.png"
                            alt="Delta Prime Group logo"
                            width={58}
                            height={52}
                            priority
                        />
                    </a>

                    <div className="brand-text">
                        <span className="brand-name">DELTA PRIME</span>
                        <span className="brand-sub">
                            <span>G</span>
                            <span>R</span>
                            <span>O</span>
                            <span>U</span>
                            <span>P</span>
                        </span>
                    </div>
                </div>

                <nav className="nav-left">
                    <a href="#events">EVENTS</a>
                    <a href="#services">SERVICES</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contact">CONTACT</a>
                </nav>

                <div className="nav-right">
                    <a href="#contact" className="explore">
                        GET A QUOTE
                    </a>
                </div>

            </header>

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
                <div className="sidebar-brand">
                    <Image
                        src="/images/logo.png"
                        alt="Delta Prime Group logo"
                        width={46}
                        height={42}
                        priority
                    />

                    <div className="sidebar-brand-text">
                        <span>DELTA PRIME</span>
                        <small className="sidebar-brand-sub">
                            <span>G</span>
                            <span>R</span>
                            <span>O</span>
                            <span>U</span>
                            <span>P</span>
                        </small>
                    </div>
                </div>
                <a href="#events" onClick={closeMenu}>EVENTS</a>
                <a href="#services" onClick={closeMenu}>SERVICES</a>
                <a href="#about" onClick={closeMenu}>ABOUT</a>
                <a href="#contact" onClick={closeMenu}>CONTACT</a>
                <a href="#contact" className="sidebar-quote" onClick={closeMenu}>
                    GET A QUOTE
                </a>
            </aside>
        </>
    );
}