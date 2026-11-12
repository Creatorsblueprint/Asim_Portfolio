import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import styles from './Consultation.module.css';
import { fadeInUp, staggerContainer } from '../animations';
import { CONSULTATION_OPTIONS, INTRO_VIDEO_URL } from '../config/bookingConfig';

const Consultation = ({ selectedTierId, onSelectTier }) => {
  const [localTierId, setLocalTierId] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const bookingStudioRef = useRef(null);
  const cardsGridRef = useRef(null);

  const activeTierId = selectedTierId !== undefined ? selectedTierId : localTierId;
  const updateTierId = (id) => {
    setLocalTierId(id);
    if (onSelectTier) {
      onSelectTier(id);
    }
  };

  const activeTier =
    CONSULTATION_OPTIONS.find((opt) => opt.id === activeTierId) || null;

  const handleSelectOption = (option) => {
    updateTierId(option.id);
    setTimeout(() => {
      if (bookingStudioRef.current) {
        bookingStudioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleSlideScroll = () => {
    if (!cardsGridRef.current) return;
    const scrollLeft = cardsGridRef.current.scrollLeft;
    const containerWidth = cardsGridRef.current.clientWidth || 1;
    const newIdx = Math.round(scrollLeft / (containerWidth * 0.8));
    if (newIdx >= 0 && newIdx < CONSULTATION_OPTIONS.length && newIdx !== activeSlideIndex) {
      setActiveSlideIndex(newIdx);
    }
  };

  const scrollToSlide = (idx) => {
    setActiveSlideIndex(idx);
    if (!cardsGridRef.current) return;
    const cardElements = cardsGridRef.current.children;
    if (cardElements && cardElements[idx]) {
      cardElements[idx].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  return (
    <section
      id="Consultation"
      className={styles.consultationSection}
      aria-label="Private Consultations"
    >
      <div className={styles.container}>
        {/* Minimalist Dark Header */}
        <motion.div
          className={styles.headerBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          <motion.span className={styles.eyebrow} variants={fadeInUp}>
            03 / PRIVATE CONSULTATIONS
          </motion.span>
          <motion.h2 className={styles.title} variants={fadeInUp}>
            Book a <em className={styles.serifItalic}>1-on-1</em> Session
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeInUp}>
            Select your consultation below to watch the brief intro and schedule your session
            directly on the calendar.
          </motion.p>
        </motion.div>

        {/* Mobile Plan Selector Switcher */}
        <div className={styles.mobilePlanSwitcher} role="tablist" aria-label="Consultation plans">
          {CONSULTATION_OPTIONS.map((option, idx) => (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={activeSlideIndex === idx}
              className={`${styles.mobilePlanTab} ${
                activeSlideIndex === idx ? styles.mobilePlanTabActive : ''
              }`}
              onClick={() => scrollToSlide(idx)}
            >
              <span className={styles.mobilePlanTabNum}>0{idx + 1}</span>
              <span className={styles.mobilePlanTabTitle}>{option.title}</span>
              <span className={styles.mobilePlanTabPrice}>{option.priceFormatted}</span>
            </button>
          ))}
        </div>

        {/* Two Consultation Cards (Desktop Grid / Mobile Smooth Snap Slider) */}
        <motion.div
          ref={cardsGridRef}
          onScroll={handleSlideScroll}
          className={styles.cardsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          {CONSULTATION_OPTIONS.map((option) => {
            const isSelected = activeTierId === option.id;
            return (
              <motion.article
                key={option.id}
                id={`tier-${option.id}`}
                className={`${styles.card} ${option.featured ? styles.cardFeatured : ''} ${
                  isSelected ? styles.cardActive : ''
                }`}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                <div className={styles.cardTopRow}>
                  <span className={styles.cardIndex}>{option.indexLabel}</span>
                  {option.badge && <span className={styles.cardBadge}>{option.badge}</span>}
                </div>

                <div className={styles.cardHeaderRow}>
                  <div>
                    <h3 className={styles.cardTitle}>{option.title}</h3>
                    <span className={styles.cardSubtitle}>{option.subtitle}</span>
                  </div>
                  <div className={styles.priceBlock}>
                    <strong className={styles.priceText}>{option.priceFormatted}</strong>
                    <span className={styles.durationText}>{option.duration}</span>
                  </div>
                </div>

                <p className={styles.cardTagline}>{option.tagline}</p>
                <p className={styles.cardSummary}>{option.summary}</p>
                <p className={styles.cardIdeal}>
                  <span>Ideal for:</span> {option.idealFor}
                </p>

                <button
                  type="button"
                  className={`${styles.bookBtn} ${
                    option.featured || isSelected ? styles.bookBtnPrimary : ''
                  }`}
                  onClick={() => handleSelectOption(option)}
                >
                  <span>{option.ctaLabel}</span>
                  <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                </button>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Mobile Slide Dots */}
        <div className={styles.mobileSlideDots} aria-hidden="true">
          {CONSULTATION_OPTIONS.map((option, idx) => (
            <button
              key={option.id}
              type="button"
              className={`${styles.mobileSlideDot} ${
                activeSlideIndex === idx ? styles.mobileSlideDotActive : ''
              }`}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Slide ${idx + 1}: ${option.title}`}
            />
          ))}
        </div>

        {/* On-Site Booking Studio: Intro Video + Direct Calendly Embed */}
        <AnimatePresence>
          {activeTier && (
            <motion.div
              ref={bookingStudioRef}
              className={styles.bookingStudio}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="region"
              aria-live="polite"
              aria-label={`Book ${activeTier.title}`}
            >
              <div className={styles.studioHeader}>
                <div className={styles.studioTitleGroup}>
                  <span className={styles.studioStepTag}>
                    ACTIVE BOOKING · {activeTier.duration.toUpperCase()}
                  </span>
                  <h4 className={styles.studioTitle}>
                    {activeTier.title} — {activeTier.priceFormatted}
                  </h4>
                </div>

                <div className={styles.studioControls}>
                  {CONSULTATION_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`${styles.tierPillBtn} ${
                        opt.id === activeTier.id ? styles.tierPillBtnActive : ''
                      }`}
                      onClick={() => updateTierId(opt.id)}
                    >
                      {opt.title} ({opt.priceFormatted})
                    </button>
                  ))}
                  <button
                    type="button"
                    className={styles.closeStudioBtn}
                    onClick={() => updateTierId(null)}
                    aria-label="Close booking studio"
                  >
                    <i className="ri-close-line" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div className={styles.studioContentGrid}>
                {/* Step 1: Intro Video */}
                <div className={styles.introVideoColumn}>
                  <div className={styles.columnHeader}>
                    <span className={styles.stepPill}>STEP 01</span>
                    <strong>Watch Intro Briefing</strong>
                  </div>
                  <div className={styles.videoFrameWrap}>
                    <iframe
                      key={activeTier.id}
                      src={`${INTRO_VIDEO_URL}&autoplay=1`}
                      title={`Intro Video — ${activeTier.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.introIframe}
                    />
                  </div>
                  <div className={styles.sessionQuickFacts}>
                    <div>
                      <span>SESSION</span>
                      <strong>{activeTier.title}</strong>
                    </div>
                    <div>
                      <span>DURATION</span>
                      <strong>{activeTier.duration}</strong>
                    </div>
                    <div>
                      <span>FEE</span>
                      <strong>{activeTier.priceUsdLabel}</strong>
                    </div>
                  </div>
                </div>

                {/* Step 2: Direct On-Site Calendly Widget */}
                <div className={styles.calendlyColumn}>
                  <div className={styles.columnHeader}>
                    <div className={styles.columnHeaderLeft}>
                      <span className={styles.stepPill}>STEP 02</span>
                      <strong>Select Your Date &amp; Time</strong>
                    </div>
                    <a
                      href={activeTier.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.directCalendlyLink}
                    >
                      <span>Direct Link</span>
                      <i className="ri-external-link-line" aria-hidden="true" />
                    </a>
                  </div>
                  <div className={styles.calendlyEmbedBox}>
                    <InlineWidget
                      url={activeTier.calendlyUrl}
                      styles={{ height: '780px', width: '100%', minWidth: '320px' }}
                      pageSettings={{
                        backgroundColor: '0d0d0d',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: 'd4af6a',
                        textColor: 'ffffff'
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Consultation;
