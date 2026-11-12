import React from 'react';
import styles from './Footer.module.css';
import { BRAND_LINKS } from '../config/bookingConfig';

const Footer = ({ setActiveNav, onSelectConsultation }) => {
  const handleNav = (id) => {
    if (setActiveNav) {
      setActiveNav(id);
    }
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <a href="#Home" className={styles.signatureLink} onClick={() => handleNav('Home')}>
              <img
                src="Images/Asim/Asim_signature_1.svg"
                alt="Asim Swati Signature"
                className={styles.signatureImg}
              />
            </a>
            <p className={styles.brandSummary}>
              Private business advisory for individuals, founders, investors, and companies
              entering or scaling in Dubai.
            </p>
          </div>

          <div className={styles.navCol}>
            <span className={styles.colLabel}>NAVIGATION</span>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#Home" onClick={() => handleNav('Home')}>
                  Overview
                </a>
              </li>
              <li>
                <a href="#Impact" onClick={() => handleNav('Impact')}>
                  Authority &amp; Track Record
                </a>
              </li>
              <li>
                <a href="#Value" onClick={() => handleNav('Value')}>
                  Advisory Framework
                </a>
              </li>
              <li>
                <a href="#Consultation" onClick={() => handleNav('Consultation')}>
                  Private Consultations
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.consultCol}>
            <span className={styles.colLabel}>1-ON-1 SESSIONS</span>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href="#Consultation"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onSelectConsultation) onSelectConsultation('discovery-call');
                  }}
                >
                  Discovery Call — $499 (30 Min)
                </a>
              </li>
              <li>
                <a
                  href="#Consultation"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onSelectConsultation) onSelectConsultation('business-consultation');
                  }}
                >
                  Business Consultation — $1,999 (90 Min)
                </a>
              </li>
            </ul>

            <div className={styles.socialGroup}>
              <a
                href={BRAND_LINKS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Asim Swati on Instagram"
              >
                <i className="ri-instagram-line" aria-hidden="true"></i>
                <span>Instagram</span>
              </a>
              <a
                href={BRAND_LINKS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Asim Swati on LinkedIn"
              >
                <i className="ri-linkedin-fill" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ASIM SWATI. All rights reserved.
          </p>
          <span className={styles.domainText}>{BRAND_LINKS.domain}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
