"use client";

import { useState, useEffect } from 'react';
import styles from './LegalDisclaimer.module.css';

export default function LegalDisclaimer() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem('disclaimerAccepted');
        if (!hasAccepted) {
            setShow(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('disclaimerAccepted', 'true');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Legal Disclaimer</h2>
                <div className={styles.content}>
                    <p>
                        As per the rules of the Bar Council of India, KVNR Law Associates does not advertise or solicit legal work in any form or manner.
                        By accessing this website, you acknowledge and confirm that:
                    </p>
                    <ul>
                        <li>You are seeking information relating to KVNR Law Associates of your own accord and there has been no solicitation, advertisement, or inducement by the firm or its members.</li>
                        <li>The content of this website is for general informational purposes only and should not be construed as legal advice.</li>
                        <li>No lawyer-client relationship is created by accessing this website.</li>
                    </ul>
                    <p>
                        Please read and accept these terms to proceed.
                    </p>
                </div>
                <div className={styles.actions}>
                    <button className="btn btn-primary" onClick={handleAccept}>
                        I AGREE AND PROCEED
                    </button>
                </div>
            </div>
        </div>
    );
}
