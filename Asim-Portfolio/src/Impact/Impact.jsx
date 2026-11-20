import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Impact.module.css';
import { fadeInUp, staggerContainer } from '../animations';
import { BRAND_LINKS } from '../config/bookingConfig';
import { ABOUT_TUXEDO_WATCH_HD } from '../config/mediaAssets';

const ADVISORY_PILLARS = [
  {
    index: '01',
    title: 'Market Entry Strategy',
    description:
      'Identify high-leverage commercial positioning and viable entry pathways across the UAE and GCC.',
    icon: 'ri-compass-3-line'
  },
  {
    index: '02',
    title: 'Corporate Structuring',
    description:
      'International holding frameworks, jurisdictional alignment, and regulatory structures matched to your goals.',
    icon: 'ri-scales-3-line'
  },
  {
    index: '03',
    title: 'Banking & Governance',
    description:
      'Institutional banking readiness, regulatory compliance, and operational frameworks built for scale.',
    icon: 'ri-building-4-line'
  },
  {
    index: '04',
    title: 'Expansion & Network',
    description:
      'Cross-border growth strategy backed by high-level institutional access and executive relationships.',
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
const TBT_YOUTUBE_SEARCH_URL = 'https://www.youtube.com/results?search_query=Thought+Behind+Things+Asim+Swati';

const PRESS_AND_MILESTONES = [
  {
    category: 'PRESS FEATURE · UAE STORIES',
    title: 'Helping 1,000+ Founders Build & Structure in Dubai',
    summary:
      'From arriving with a one-way ticket to advising 1,000+ founders, HNIs, and public figures with real-world Dubai corporate clarity.',
    image: 'Images/Asim/Gallery_5.jpg',
    imageAlt: 'Asim Swati featured in UAE Stories',
    actionLabel: 'Read UAE Stories Article',
    href: UAE_STORIES_ARTICLE_URL
  },
  {
    category: 'PODCAST FEATURE · TBT',
    title: 'UAE Business Landscape & Market Realities',
    summary:
      'Full-length conversation with Muzamil Hasan on Thought Behind Things covering Dubai corporate realities, regional markets, and market entry.',
    image: 'Images/Asim/Gallery_2.jpg',
    imageAlt: 'Asim Swati on Thought Behind Things Podcast',
    actionLabel: 'Watch on YouTube',
    href: TBT_YOUTUBE_SEARCH_URL
  },
  {
    category: 'EXECUTIVE ADVISORY',
    title: 'H.E. Nasser Al Neyadi, Emirates Padel & Sky Adventures',
    summary:
      'Strategic advisory alongside UAE leadership and operational launch of flagship sports and adventure-tourism ventures in Dubai.',
    image: 'Images/Asim/Gallery_1.jpg',
    imageAlt: 'Asim Swati with H.E. Nasser Al Neyadi',
    actionLabel: 'Read Executive Journey',
    href: `${UAE_STORIES_ARTICLE_URL}#building-a-business-that-impacts-lives`
  }
];

const GENERAL_GALLERY = [
  {
    src: 'Images/Asim/Gallery_1.jpg',
    alt: 'Asim Swati at an executive business meeting in Dubai'
  },
  {
    src: 'Images/Asim/Gallery_2.jpg',
    alt: 'Asim Swati at an entrepreneurship event in Dubai'
  },
  {
    src: 'Images/Asim/Gallery_3.jpg',
    alt: 'Asim Swati networking with business leaders in the UAE'
  },
  {
    src: 'Images/Asim/Gallery_4.jpg',
    alt: 'Asim Swati attending an international business gathering'
  },
  {
    src: 'Images/Asim/Gallery_5.jpg',
    alt: 'Asim Swati in conversation at an executive reception'
  },
  {
    src: 'Images/Asim/Gallery_6.jpg',
    alt: 'Asim Swati at a private business forum in Dubai'
  },
  {
    src: 'Images/Asim/Gallery_7.jpg',
    alt: 'Asim Swati meeting with founders and partners in the UAE'
  },
  {
    src: 'Images/Asim/Gallery_8.jpg',
    alt: 'Asim Swati collaborating with venture partners in Dubai'
  },
  {
    src: 'Images/Asim/Gallery_13.jpg',
    alt: 'Asim Swati during a private advisory strategy session'
  },
  {
    src: 'Images/Asim/Gallery_14.jpg',
    alt: 'Asim Swati at an industry leadership dinner in Dubai'
  }
];

const ABOUT_METRICS = [
  {
    value: '12+ Years',
    label: 'UAE Business & Advisory'
  },
  {
    value: '1,000+',
    label: 'Founders & Ventures Advised'
  },
  {
    value: 'Dubai, UAE',
    label: 'Corporate & Cross-Border Focus'
  }
];

const Impact = () => {
  const galleryTrackRef = useRef(null);

  const handleGalleryScroll = (direction) => {
    const track = galleryTrackRef.current;
    if (!track) return;
    const step = Math.max(300, Math.round(track.clientWidth * 0.72));
    track.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.impactWrapper}>
      {/* Personally Advised Ventures Bar */}
      <div className={styles.marqueeBar} aria-label="Businesses Advised">
        <div className={styles.marqueeHeader}>
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

      {/* About Asim Swati Section */}
      <section id="About" className={styles.aboutSection} aria-labelledby="about-heading">
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <motion.div
              className={styles.aboutVisualCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
            >
              <div className={styles.aboutPortraitFrame}>
                <div className={styles.aboutPortraitGlow} aria-hidden="true" />
                <img
                  src={ABOUT_TUXEDO_WATCH_HD}
                  alt="Asim Swati, Dubai-based entrepreneur and business advisor"
                  loading="lazy"
                  decoding="async"
                  className={styles.aboutPortraitImg}
                />
                <div className={styles.aboutPortraitFloorShadow} aria-hidden="true" />
              </div>
            </motion.div>

            <motion.div
              className={styles.aboutContentCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
            >
              <motion.span className={styles.eyebrowIndex} variants={fadeInUp}>
                PROFILE
              </motion.span>
              <motion.h2 id="about-heading" className={styles.sectionTitle} variants={fadeInUp}>
                About <span className={styles.serifAccent}>Asim Swati</span>
              </motion.h2>
              <motion.p className={styles.aboutParagraph} variants={fadeInUp}>
                Asim Swati is a Dubai-based entrepreneur and international business advisor who works
                with founders, investors, and established companies navigating corporate structuring
                and market entry in the United Arab Emirates.
              </motion.p>
              <motion.p className={styles.aboutParagraph} variants={fadeInUp}>
                Having built his career in Dubai over the past 12+ years, Asim started from the
                ground up before co-founding and operating ventures across digital marketing,
                hospitality, sports, and adventure tourism. Alongside his private-sector work, he
                has advised over 1,000 founders and worked across both private enterprise and UAE
                institutional initiatives.
              </motion.p>
              <motion.p className={styles.aboutParagraph} variants={fadeInUp}>
                Today, Asim focuses on private 1-on-1 advisory, helping founders, investors, and
                global operators make clear, practical decisions on UAE market positioning,
                corporate structure, banking readiness, and long-term regional expansion.
              </motion.p>

              <motion.div className={styles.aboutMetricsGrid} variants={fadeInUp}>
                {ABOUT_METRICS.map((metric) => (
                  <div key={metric.label} className={styles.aboutMetricCard}>
                    <strong className={styles.aboutMetricValue}>{metric.value}</strong>
                    <span className={styles.aboutMetricLabel}>{metric.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority & 4 Advisory Pillars */}
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
              What Works in <span className={styles.serifAccent}>Dubai.</span>
            </motion.h2>
            <motion.p className={styles.conciseSub} variants={fadeInUp}>
              12+ years helping founders, investors, and global enterprises structure and scale in
              the UAE.
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

      {/* Executive Spotlight, 3 Case Cards & General Swiping Gallery */}
      <section id="Value" className={styles.mediaSocialsSection} aria-label="Advisory in Action and Media">
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
                Inside the <span className={styles.serifAccent}>Network</span>
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

          <div className={styles.mediaBento}>
            {/* Significant Editorial Executive Spotlight (Replaces Top Video Card) */}
            <motion.article
              className={styles.executiveFeatureCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src="Images/Asim/Gallery_1.jpg"
                alt="Asim Swati advising international executives and leadership partners in Dubai"
                loading="lazy"
                decoding="async"
                className={styles.executiveFeatureImg}
              />
              <div className={styles.executiveFeatureOverlay}>
                <div className={styles.executiveFeatureBody}>
                  <h3 className={styles.executiveFeatureTitle}>
                    Advising 1,000+ Founders, Investors &amp; Flagship UAE Ventures
                  </h3>
                  <p className={styles.executiveFeatureDesc}>
                    Built on more than a decade of hands-on venture building and
                    private-to-institutional advisory across Dubai, translating regional complexity
                    into clear corporate execution.
                  </p>
                </div>
                <div className={styles.executiveFeatureFooter}>
                  <div className={styles.executivePills}>
                    <span className={styles.executivePill}>12+ Years in Dubai</span>
                    <span className={styles.executivePill}>1,000+ Founders Advised</span>
                    <span className={styles.executivePill}>International Corporate Advisory</span>
                  </div>
                  <a href="#Consultation" className={styles.executiveCtaLink}>
                    <span>Book a Private Consultation</span>
                    <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Verified Media & Executive Milestones Strip (3 Case-Specific Cards Retained) */}
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
                    aria-label={item.title}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className={styles.pressThumbImg}
                    />
                    <span className={styles.pressBadgeOverlay}>{item.category}</span>
                  </a>

                  <div className={styles.pressCardBody}>
                    <h3 className={styles.pressTitle}>{item.title}</h3>
                    <p className={styles.pressSummary}>{item.summary}</p>
                    <div className={styles.pressActionsRow}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.pressLinkBtn}
                      >
                        <span>{item.actionLabel}</span>
                        <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* General Swiping Photo Gallery (No Client Names / Case Overlays) */}
            <div className={styles.galleryBlock}>
              <div className={styles.galleryHeaderBar}>
                <div>
                  <span className={styles.eyebrowIndex}>GLOBAL NETWORK &amp; MOMENTS</span>
                  <h3 className={styles.galleryHeading}>Selected Gatherings &amp; Advisory Moments</h3>
                </div>
                <div className={styles.galleryControls}>
                  <button
                    type="button"
                    className={styles.galleryNavBtn}
                    onClick={() => handleGalleryScroll('prev')}
                    aria-label="Previous gallery photos"
                  >
                    <i className="ri-arrow-left-s-line" aria-hidden="true"></i>
                  </button>
                  <button
                    type="button"
                    className={styles.galleryNavBtn}
                    onClick={() => handleGalleryScroll('next')}
                    aria-label="Next gallery photos"
                  >
                    <i className="ri-arrow-right-s-line" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div
                ref={galleryTrackRef}
                className={styles.gallerySwipeTrack}
                role="region"
                aria-label="Asim Swati swiping photo gallery"
              >
                {GENERAL_GALLERY.map((photo, idx) => (
                  <div key={idx} className={styles.gallerySlideCard}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      className={styles.photoCardImg}
                    />
                  </div>
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
