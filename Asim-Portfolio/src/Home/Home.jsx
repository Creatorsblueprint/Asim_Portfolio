import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import { fadeInUp, staggerContainer, fadeIn } from '../animations';
import { BRAND_LINKS } from '../config/bookingConfig';
import { HERO_RED_GLASSES_HD } from '../config/mediaAssets';

const Home = ({ onSelectConsultation }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
              Opportunities move quickly in <em className={styles.headlineSerif}>Dubai.</em>
            </motion.h1>

            <motion.p className={styles.leadCopy} variants={fadeInUp}>
              1-on-1 strategy &amp; business setup consultations for founders, investors, and
              global brands.
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
                onClick={() =>
                  onSelectConsultation
                    ? onSelectConsultation('business-consultation')
                    : scrollToSection('Consultation')
                }
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
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line" aria-hidden="true"></i>
                  <span>@asimswatii</span>
                </a>
                <a
                  href={BRAND_LINKS.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialPill}
                  aria-label="LinkedIn"
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
                alt="Asim Swati"
                className={styles.unboxedPortraitImg}
                fetchPriority="high"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
