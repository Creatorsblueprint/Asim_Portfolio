import { useEffect, useState } from 'react';
import styles from './Nav.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_LINKS } from '../config/bookingConfig';

const NAV_ITEMS = [
  { id: 'Home', label: 'Overview', href: '#Home' },
  { id: 'Impact', label: 'Authority', href: '#Impact' },
  { id: 'Value', label: 'Advisory', href: '#Value' },
  { id: 'Consultation', label: 'Consultations', href: '#Consultation' }
];

const Nav = ({ activeNav, setActiveNav, onSelectConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ['Home', 'Impact', 'Value', 'Consultation'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveNav(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveNav]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
  };

  const handleBookClick = (tierId = null) => {
    setActiveNav('Consultation');
    setMobileMenuOpen(false);
    if (onSelectConsultation && tierId) {
      onSelectConsultation(tierId);
    } else {
      const el = document.getElementById('Consultation');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`${styles.headerBar} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.navInner}>
        <a
          href="#Home"
          className={styles.brandLink}
          onClick={() => handleNavClick('Home')}
          aria-label="Asim Swati — Return to top"
        >
          <span className={styles.brandDash} aria-hidden="true" />
          <span className={styles.brandName}>ASIM SWATI</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary Navigation">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${activeNav === item.id ? styles.navLinkActive : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <a
            href="#Consultation"
            className={styles.primaryCta}
            onClick={(e) => {
              e.preventDefault();
              handleBookClick();
            }}
          >
            <span>Book Consultation</span>
            <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
          </a>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-4-line'} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className={styles.mobileDrawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className={styles.drawerHeader}>
                <div className={styles.drawerBrand}>
                  <img src="Images/Asim/Asim_signature_1.svg" alt="Asim Swati signature" />
                </div>
                <button
                  type="button"
                  className={styles.drawerClose}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <i className="ri-close-line" aria-hidden="true"></i>
                </button>
              </div>

              <ul className={styles.drawerLinks}>
                {NAV_ITEMS.map((item, idx) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={activeNav === item.id ? styles.drawerLinkActive : ''}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span className={styles.drawerIndex}>0{idx + 1}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className={styles.drawerConsultationBox}>
                <p className={styles.drawerBoxLabel}>PRIVATE 1-ON-1 CONSULTATIONS</p>
                <button
                  type="button"
                  className={styles.drawerSessionBtn}
                  onClick={() => handleBookClick('discovery-call')}
                >
                  <div>
                    <strong>Discovery Call</strong>
                    <span>30 Minutes</span>
                  </div>
                  <span className={styles.drawerPrice}>$499</span>
                </button>
                <button
                  type="button"
                  className={`${styles.drawerSessionBtn} ${styles.drawerSessionFeatured}`}
                  onClick={() => handleBookClick('business-consultation')}
                >
                  <div>
                    <strong>Business Consultation</strong>
                    <span>90 Minutes · Strategic Deep Dive</span>
                  </div>
                  <span className={styles.drawerPrice}>$1,999</span>
                </button>
              </div>

              <div className={styles.drawerFooter}>
                <div className={styles.drawerSocials}>
                  <a
                    href={BRAND_LINKS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Asim Swati on Instagram"
                  >
                    <i className="ri-instagram-line" aria-hidden="true"></i>
                    <span>Instagram</span>
                  </a>
                  <a
                    href={BRAND_LINKS.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Asim Swati on LinkedIn"
                  >
                    <i className="ri-linkedin-fill" aria-hidden="true"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
                <p className={styles.drawerCopyright}>
                  © {new Date().getFullYear()} Asim Swati. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
