"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoText}>
                        KVNR Law Associates
                    </Link>
                    <span className={styles.subtitle}>Advocates & Legal Consultants</span>
                </div>

                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/experience" className={styles.link}>Experience</Link>
                    <Link href="/practice-areas" className={styles.link}>Practice Areas</Link>
                    <Link href="/bns" className={styles.link} style={{ color: 'var(--secondary-dark)' }}>BNS Guide</Link>
                    <Link href="/contact" className={styles.cta}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
