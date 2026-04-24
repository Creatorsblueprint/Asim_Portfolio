import React from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import styles from './Consultation.module.css';
import { fadeInUp, staggerContainer } from '../animations';

const Consultation = () => {
    return (
        <div id="Consultation" className={styles.consultationContainer}>
            <div className={styles.consultationContent}>
                <motion.div
                    className={styles.headerSection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeInUp}>
                        Book a <span>1-on-1</span> Session
                    </motion.h1>
                    <motion.p className={styles.description} variants={fadeInUp}>
                        Schedule a consultation to discuss your goals, get strategy advice, and map out your next steps in Dubai. Let’s make it happen.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.calendlyWrapper}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <InlineWidget
                        url="https://calendly.com/asimswati-info/new-meeting"
                        styles={{ height: '100%', width: '100%' }}
                        pageSettings={{
                            backgroundColor: '1e1e1e',
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: 'ffbd59',
                            textColor: 'ffffff'
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Consultation;
