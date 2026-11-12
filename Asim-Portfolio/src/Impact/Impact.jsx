import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Impact.module.css';
import { fadeInUp, staggerContainer } from '../animations';
import { BRAND_LINKS, INTRO_VIDEO_URL } from '../config/bookingConfig';

const ADVISORY_PILLARS = [
  {
    index: '01',
    title: 'Market Validation',
    description: 'Pinpoint where the real opportunity is for your business in the UAE.',
    icon: 'ri-compass-3-line'
  },
  {
    index: '02',
    title: 'Structure & Visa',
    description: 'License, jurisdiction & visa decisions matched to your goals.',
    icon: 'ri-scales-3-line'
  },
  {
    index: '03',
    title: 'Banking & Setup',
    description: 'Company formation, banking & compliance built to operate smoothly.',
    icon: 'ri-building-4-line'
  },
  {
    index: '04',
    title: 'Scale & Network',
    description: 'Strategic growth to expand your revenue, network, and market impact.',
    icon: 'ri-line-chart-line'
  }
];

const VENTURE_LOGOS = [
  { src: 'Images/Logos/logo_1.svg', name: 'Sky Adventures', variant: 'square', href: 'https://sky-adventures.ae/' },
  { src: 'Images/Logos/logo_2.svg', name: 'Linked4HR', variant: 'wide', href: 'https://linked4hr.com/' },
  { src: 'Images/Logos/Logo_3.svg', name: 'The Ether', variant: 'wide', href: 'https://the-ether.com/' },
  { src: 'Images/Logos/logo_4.svg', name: 'OneDrop Investments', variant: 'square', href: 'https://onedrop-inv.com/' },
  { src: 'Images/Logos/logo_5.svg', name: 'Vortex Net', variant: 'wide', href: 'https://www.vortex-net.com/en/' },
  { src: 'Images/Logos/logo_6.svg', name: 'Newmare', variant: 'wide', href: 'https://newmare.com/' },
  { src: 'Images/Logos/logo_7.svg', name: 'Emirates Padel', variant: 'medium', href: 'https://emiratespadel.com/' }
];

const UAE_STORIES_ARTICLE_URL = 'https://uaestories.com/asim-swati-inspires-entrepreneurs-with/';
const UAE_STORIES_SECOND_IMAGE_URL =
  'https://b4494830.assetcdn.net/2.0/4494830/wp-content/uploads/2026/04/IMG_7731-scaled-e1775644310680-1024x621.jpg?lossy=1&strip=1&webp=1';
const TBT_YOUTUBE_WATCH_URL = 'https://www.youtube.com/watch?v=Ocjpq-rV1ZM';

const PRESS_AND_MILESTONES = [
  {
    category: 'PRESS FEATURE · UAE STORIES',
    title: 'Helping 1,000+ Founders Build & Structure in Dubai',
    summary:
      'From arriving with a one-way ticket to advising 1,000+ founders, HNIs, and public figures with real-world Dubai corporate clarity.',
    image: UAE_STORIES_SECOND_IMAGE_URL,
    fallbackImage: 'Images/Asim/Gallery_5.jpg',
    imageAlt: 'Asim Swati featured in UAE Stories',
    actionLabel: 'Read UAE Stories Article',
    href: UAE_STORIES_ARTICLE_URL,
    icon: 'ri-Newspaper-line'
  },
  {
    category: 'PODCAST FEATURE · TBT',
    title: 'UAE Business, Visa Policy & Market Realities',
    summary:
      'Full-length sit-down with Muzamil Hasan on Thought Behind Things dissecting UAE company setup, regulations, and market entry.',
    image: 'Images/Asim/Gallery_2.jpg',
    fallbackImage: 'Images/Asim/Gallery_2.jpg',
    imageAlt: 'Asim Swati on Thought Behind Things Podcast',
    actionLabel: 'Watch Full Episode',
    href: TBT_YOUTUBE_WATCH_URL,
    isVideoTrigger: true,
    icon: 'ri-mic-line'
  },
  {
    category: 'EXECUTIVE ADVISORY',
    title: 'H.E. Nasser Al Neyadi, Emirates Padel & Sky Adventures',
    summary:
      'Strategic advisory alongside UAE leadership and operational launch of flagship sports and adventure-tourism ventures in Dubai.',
    image: 'Images/Asim/Gallery_1.jpg',
    fallbackImage: 'Images/Asim/Gallery_1.jpg',
    imageAlt: 'Asim Swati with H.E. Nasser Al Neyadi',
    actionLabel: 'Read Executive Journey',
    href: `${UAE_STORIES_ARTICLE_URL}#building-a-business-that-impacts-lives`,
    icon: 'ri-award-line'
  }
];

const MEDIA_REEL = [
  {
    src: 'Images/Asim/Gallery_5.jpg',
    tag: 'EXECUTIVE NETWORK',
    href: 'https://www.instagram.com/asimswatii/reel/DfZso_os2dr/'
  },
  {
    src: 'Images/Asim/Gallery_2.jpg',
    tag: 'TBT PODCAST EPISODE',
    href: TBT_YOUTUBE_WATCH_URL
  },
  {
    src: 'Images/Asim/Gallery_1.jpg',
    tag: 'H.E. NASSER AL NEYADI',
    href: 'https://www.instagram.com/uaestoriesofficial/p/DW3GqajE_fy/'
  },
  {
    src: 'Images/Asim/Gallery_3.jpg',
    tag: 'EMIRATES PADEL CENTER',
    href: 'https://www.instagram.com/asimswatii/reel/DfC1Ma7qfMK/'
  },
  {
    src: 'Images/Asim/Gallery_8.jpg',
    tag: 'SKY ADVENTURES DUBAI',
    href: 'https://www.instagram.com/asimswatii/p/DfKlsq0itIU/'
  },
  {
    src: 'Images/Asim/Gallery_10.jpg',
    tag: 'PRIVATE ADVISORY',
    href: 'https://www.instagram.com/asimswatii/reel/DeJt61TKVaZ/'
  },
  {
    src: 'Images/Asim/Gallery_4.jpg',
    tag: 'GLOBAL FORUMS',
    href: 'https://www.instagram.com/asimswatii/reel/DfWxM_FqOVT/'
  }
];

const Impact = () => {
  const [playFeatureVideo, setPlayFeatureVideo] = useState(false);

  const photoTrackRef = useRef(null);
  const isPhotoPausedRef = useRef(false);
  const offsetPxRef = useRef(0);

  useEffect(() => {
    let animationFrameId;
    let lastTimestamp = null;
    const photoSpeedPxPerSec = 48;

    const step = (timestamp) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }
      const deltaSec = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;

      const trackEl = photoTrackRef.current;
      if (trackEl && !isPhotoPausedRef.current) {
        const halfWidth = trackEl.scrollWidth / 2;
        if (halfWidth > 0) {
          offsetPxRef.current -= photoSpeedPxPerSec * deltaSec;
          if (Math.abs(offsetPxRef.current) >= halfWidth) {
            offsetPxRef.current += halfWidth;
          }
          trackEl.style.transform = `translate3d(${offsetPxRef.current}px, 0, 0)`;
        }
      }

      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleWatchInterview = () => {
    setPlayFeatureVideo(true);
    const videoCard = document.getElementById('featured-interview-player');
    if (videoCard) {
      videoCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className={styles.impactWrapper}>
      {/* Personally Advised Ventures Bar — True Continuous Infinite Loop with Equalized Balanced Sizes */}
      <div className={styles.marqueeBar} aria-label="Businesses Advised">
        <div className={styles.marqueeHeader}>
          <span className={styles.marqueeEyebrowDot} aria-hidden="true" />
          <span className={styles.marqueeLabel}>BUSINESSES PERSONALLY ADVISED &amp; VENTURE ECOSYSTEM</span>
        </div>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeGroup}>
            {VENTURE_LOGOS.map((logo, idx) => (
              <a
                key={`grp1-${idx}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.marqueeItem}
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  className={`${styles.marqueeLogo} ${styles[`logo_${logo.variant}`]}`}
                />
              </a>
            ))}
          </div>
          <div className={styles.marqueeGroup} aria-hidden="true">
            {VENTURE_LOGOS.map((logo, idx) => (
              <a
                key={`grp2-${idx}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex="-1"
                className={styles.marqueeItem}
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  className={`${styles.marqueeLogo} ${styles[`logo_${logo.variant}`]}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Minimalist Authority & 4 Advisory Pillars */}
      <section id="Impact" className={styles.authoritySection} aria-label="Authority and Value">
        <div className={styles.container}>
          <motion.div
            className={styles.compactHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            <motion.span className={styles.eyebrowIndex} variants={fadeInUp}>
              01 / AUTHORITY
            </motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              What Works in <em className={styles.serifAccent}>Dubai.</em>
            </motion.h2>
            <motion.p className={styles.conciseSub} variants={fadeInUp}>
              5+ years helping founders, investors, and global brands launch and scale.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.pillarsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {ADVISORY_PILLARS.map((pillar) => (
              <motion.article
                key={pillar.index}
                className={styles.pillarCard}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                <div className={styles.pillarTop}>
                  <span className={styles.pillarIndex}>{pillar.index}</span>
                  <div className={styles.pillarIcon} aria-hidden="true">
                    <i className={pillar.icon}></i>
                  </div>
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visuals, Video & Socials Showcase */}
      <section id="Value" className={styles.mediaSocialsSection} aria-label="Media and Socials">
        <div className={styles.container}>
          <motion.div
            className={styles.mediaHeaderRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            <div>
              <motion.span className={styles.eyebrowIndex} variants={fadeInUp}>
                02 / IN ACTION &amp; SOCIALS
              </motion.span>
              <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
                Inside the <em className={styles.serifAccent}>Network</em>
              </motion.h2>
            </div>

            <motion.div className={styles.socialCtaRow} variants={fadeInUp}>
              <a
                href={BRAND_LINKS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialActionCard}
              >
                <i className="ri-instagram-line" aria-hidden="true"></i>
                <div>
                  <strong>Instagram</strong>
                  <span>{BRAND_LINKS.instagramHandle}</span>
                </div>
                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
              </a>

              <a
                href={BRAND_LINKS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialActionCard}
              >
                <i className="ri-linkedin-fill" aria-hidden="true"></i>
                <div>
                  <strong>LinkedIn</strong>
                  <span>Asim Swati</span>
                </div>
                <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
              </a>
            </motion.div>
          </motion.div>

          {/* Featured Video + Verified Press/Milestones + Animated Photo Stream */}
          <div className={styles.mediaBento}>
            <motion.div
              id="featured-interview-player"
              className={styles.videoFeatureCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {playFeatureVideo ? (
                <iframe
                  src={`${INTRO_VIDEO_URL}&autoplay=1`}
                  title="Asim Swati — Featured TBT Podcast Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoIframe}
                />
              ) : (
                <button
                  type="button"
                  className={styles.videoPosterBtn}
                  onClick={() => setPlayFeatureVideo(true)}
                  aria-label="Play Featured Interview on UAE Business & Visa Realities"
                >
                  <img
                    src="Images/Asim/Gallery_2.jpg"
                    alt="Asim Swati Featured Interview Preview"
                    className={styles.videoPosterImg}
                  />
                  <div className={styles.videoOverlay}>
                    <span className={styles.videoBadge}>FEATURED INTERVIEW · TBT PODCAST</span>
                    <div className={styles.playCircle}>
                      <i className="ri-play-fill" aria-hidden="true"></i>
                    </div>
                    <div className={styles.videoBottomText}>
                      <strong>UAE Business Landscape, Visa Policy &amp; Market Realities</strong>
                      <span>Featured conversation with Muzamil Hasan · Click to play</span>
                    </div>
                  </div>
                </button>
              )}
            </motion.div>

            {/* Verified Media & Executive Milestones Strip with Visuals */}
            <motion.div
              className={styles.pressGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              {PRESS_AND_MILESTONES.map((item, idx) => (
                <motion.article
                  key={idx}
                  className={styles.pressCard}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.22 } }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pressThumbLink}
                    onClick={(e) => {
                      if (item.isVideoTrigger) {
                        e.preventDefault();
                        handleWatchInterview();
                      }
                    }}
                    aria-label={item.title}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className={styles.pressThumbImg}
                      onError={(e) => {
                        if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                          e.currentTarget.src = item.fallbackImage;
                        }
                      }}
                    />
                    <span className={styles.pressBadgeOverlay}>{item.category}</span>
                  </a>

                  <div className={styles.pressCardBody}>
                    <h3 className={styles.pressTitle}>{item.title}</h3>
                    <p className={styles.pressSummary}>{item.summary}</p>
                    <div className={styles.pressActionsRow}>
                      {item.isVideoTrigger ? (
                        <>
                          <button
                            type="button"
                            className={styles.pressLinkBtn}
                            onClick={handleWatchInterview}
                          >
                            <span>Play On-Site</span>
                            <i className="ri-play-circle-line" aria-hidden="true"></i>
                          </button>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pressSecondaryLink}
                          >
                            <span>YouTube</span>
                            <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                          </a>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.pressLinkBtn}
                        >
                          <span>{item.actionLabel}</span>
                          <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Auto-Scrolling Instagram Reel — Stops Immediately on Hover */}
            <div
              className={styles.photoMarqueeOuter}
              onMouseEnter={() => {
                isPhotoPausedRef.current = true;
              }}
              onMouseLeave={() => {
                isPhotoPausedRef.current = false;
              }}
              onTouchStart={() => {
                isPhotoPausedRef.current = true;
              }}
              onTouchEnd={() => {
                isPhotoPausedRef.current = false;
              }}
            >
              <div ref={photoTrackRef} className={styles.photoMarqueeTrack}>
                {[...MEDIA_REEL, ...MEDIA_REEL].map((photo, idx) => (
                  <a
                    key={idx}
                    href={photo.href || BRAND_LINKS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.photoCard}
                    aria-label={`View ${photo.tag}`}
                    onMouseEnter={() => {
                      isPhotoPausedRef.current = true;
                    }}
                    onFocus={() => {
                      isPhotoPausedRef.current = true;
                    }}
                    onBlur={() => {
                      isPhotoPausedRef.current = false;
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.tag}
                      loading="lazy"
                      decoding="async"
                      className={styles.photoCardImg}
                      onError={(e) => {
                        if (photo.fallbackSrc && e.currentTarget.src !== photo.fallbackSrc) {
                          e.currentTarget.src = photo.fallbackSrc;
                        }
                      }}
                    />
                    <div className={styles.photoCardHover}>
                      <span className={styles.photoTag}>{photo.tag}</span>
                      <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
