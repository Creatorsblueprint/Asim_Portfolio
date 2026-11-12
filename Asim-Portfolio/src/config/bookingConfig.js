/**
 * Consultation & Booking Configuration — Asim Swati (CreatorsBlueprint)
 *
 * Dedicated Calendly URLs for each distinct consultation tier:
 * 1. Discovery Call ($499 / 30 mins)
 * 2. Business Consultation ($1,999 / 90 mins)
 *
 * Configurable Intro Video URL plays when a visitor clicks to book.
 */

export const DISCOVERY_CALL_CALENDLY_URL =
  import.meta.env.VITE_DISCOVERY_CALL_CALENDLY_URL ||
  'https://calendly.com/asimswati-info/discovery-call-private-strategy-session';

export const BUSINESS_CONSULTATION_CALENDLY_URL =
  import.meta.env.VITE_BUSINESS_CONSULTATION_CALENDLY_URL ||
  'https://calendly.com/asimswati-info/business-consultation-in-depth-strategic-advisory';

export const INTRO_VIDEO_URL =
  import.meta.env.VITE_BOOKING_INTRO_VIDEO_URL ||
  'https://www.youtube.com/embed/Ocjpq-rV1ZM?si=j2P9zLcdhehqnGZb';

export const CONSULTATION_OPTIONS = [
  {
    id: 'discovery-call',
    indexLabel: '01 / PRIVATE CONSULTING',
    title: 'Discovery Call',
    subtitle: 'Initial Strategic Conversation',
    priceFormatted: '$499',
    priceUsdLabel: 'USD 499',
    amount: 499,
    currency: 'USD',
    duration: '30 Minutes',
    featured: false,
    tagline: 'Expert guidance. Clear direction.',
    summary:
      'A private 1-on-1 session for individuals and entrepreneurs seeking clear direction on Dubai business opportunities, company formation, or their next move.',
    idealFor: 'Individuals, professionals & aspiring entrepreneurs exploring Dubai.',
    ctaLabel: 'Book a Discovery Call',
    calendlyUrl: DISCOVERY_CALL_CALENDLY_URL
  },
  {
    id: 'business-consultation',
    indexLabel: '02 / PRIVATE CONSULTING',
    title: 'Business Consultation',
    subtitle: 'In-Depth Strategic Advisory',
    priceFormatted: '$1,999',
    priceUsdLabel: 'USD 1,999',
    amount: 1999,
    currency: 'USD',
    duration: '90 Minutes',
    featured: true,
    badge: 'Most Comprehensive',
    tagline: 'Strategic advice for serious business decisions.',
    summary:
      'An exclusive deep-dive session for investors, founders, and established companies to map out corporate structure, licensing, banking, and market entry strategy.',
    idealFor: 'International investors, established companies & HNW entrepreneurs.',
    ctaLabel: 'Book a Business Consultation',
    calendlyUrl: BUSINESS_CONSULTATION_CALENDLY_URL
  }
];

export const BRAND_LINKS = {
  domain: 'ASIMSWATI.COM',
  instagramUrl: 'https://www.instagram.com/asimswatii/',
  instagramHandle: '@ASIMSWATII',
  linkedinUrl: 'https://www.linkedin.com/in/asim-swati-141579136/'
};
