import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.css';
import { fadeInUp, staggerContainer, fadeIn } from '../animations';
import { BRAND_LINKS, GENERAL_INTRO_VIDEO_URL } from '../config/bookingConfig';
import { HERO_RED_GLASSES_HD } from '../config/mediaAssets';

const getAutoplayUrl = (url) => {
  if (!url) return '';
  return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
};

const Home = ({ onSelectConsultation }) => {
  const [introModalOpen, setIntroModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!introModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIntroModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [introModalOpen]);

  const handleBookFromModal = () => {
    setIntroModalOpen(false);
    if (onSelectConsultation) {
      onSelectConsultation(null);
    } else {
      scrollToSection('Consultation');
    }
  };

  return (
    <section id="Home" className={styles.heroSection} aria-label="Introduction">
      {/* Subtle architectural background typography watermark */}
      <div className={styles.bgWatermark} aria-hidden="true">
        ASIM SWATI
      </div>
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* Editorial Copy Column */}
          <motion.div
            className={styles.heroCopyColumn}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className={styles.eyebrowRow} variants={fadeInUp}>
              <span className={styles.eyebrowText}>PRIVATE BUSINESS ADVISORY</span>
            </motion.div>

            <motion.h1 className={styles.headline} variants={fadeInUp}>
              Opportunities move quickly in <span className={styles.headlineAccent}>Dubai.</span>
            </motion.h1>

            <motion.p className={styles.leadCopy} variants={fadeInUp}>
              Private 1-on-1 international corporate structuring and market-entry advisory for
              founders, investors, and global enterprises.
            </motion.p>

            <motion.div className={styles.ctaGroup} variants={fadeInUp}>
              <button
                type="button"
                className={styles.primaryCta}
                onClick={() => scrollToSection('Consultation')}
              >
                <span>Book 1-on-1 Session</span>
                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
              </button>

              <button
                type="button"
                className={styles.videoTriggerBtn}
                onClick={() => setIntroModalOpen(true)}
              >
                <span className={styles.playPulse} aria-hidden="true">
                  <i className="ri-play-fill"></i>
                </span>
                <span>Watch Intro</span>
              </button>
            </motion.div>

            <motion.div className={styles.heroFooterRow} variants={fadeIn}>
              <img
                src="Images/Asim/Asim_signature_1.svg"
                alt="Asim Swati signature"
                className={styles.signatureImg}
              />

              <div className={styles.heroSocials}>
                <a
                  href={BRAND_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialPill}
                  aria-label="Asim Swati on Instagram"
                >
                  <i className="ri-instagram-line" aria-hidden="true"></i>
                  <span>@asimswatii</span>
                </a>
                <a
                  href={BRAND_LINKS.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialPill}
                  aria-label="Asim Swati on LinkedIn"
                >
                  <i className="ri-linkedin-fill" aria-hidden="true"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Editorial Portrait Column with Halo Ring & Seamless Bottom Blend */}
          <motion.div
            className={styles.heroVisualColumn}
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.portraitStage}>
              <div className={styles.haloRing} aria-hidden="true" />
              <div className={styles.portraitSpotlight} aria-hidden="true" />
              <motion.img
                src={HERO_RED_GLASSES_HD}
                alt="Asim Swati, Dubai-based entrepreneur and business advisor"
                className={styles.unboxedPortraitImg}
                fetchPriority="high"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* General Intro Dark Cinema Modal */}
      <AnimatePresence>
        {introModalOpen && (
          <motion.div
            className={styles.introModalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setIntroModalOpen(false)}
          >
            <motion.div
              className={styles.introModalCard}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="intro-modal-title"
            >
              <div className={styles.introModalHeader}>
                <div className={styles.introModalTitleWrap}>
                  <span className={styles.introModalEyebrow}>GENERAL INTRODUCTION</span>
                  <h2 id="intro-modal-title" className={styles.introModalTitle}>
                    Meet Asim Swati
                  </h2>
                </div>
                <button
                  type="button"
                  className={styles.introModalClose}
                  onClick={() => setIntroModalOpen(false)}
                  aria-label="Close introduction video"
                >
                  <i className="ri-close-line" aria-hidden="true"></i>
                </button>
              </div>

              <div className={styles.introModalFrame}>
                <iframe
                  src={getAutoplayUrl(GENERAL_INTRO_VIDEO_URL)}
                  title="Asim Swati General Introduction Briefing"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.introModalIframe}
                />
              </div>

              <div className={styles.introModalFooter}>
                <p className={styles.introModalNote}>
                  1-on-1 international corporate structuring and UAE market-entry advisory.
                </p>
                <button
                  type="button"
                  className={styles.introModalCta}
                  onClick={handleBookFromModal}
                >
                  <span>Book a 1-on-1 Session</span>
                  <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
