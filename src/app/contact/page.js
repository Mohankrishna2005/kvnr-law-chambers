import styles from './contact.module.css';

export const metadata = {
    title: "Contact Us | KVNR Law Associates",
    description: "Get in touch for legal consultation. Located opposite Junior Civil Judge Court, Singarayakonda.",
};

export default function Contact() {
    return (
        <div className="container section">
            <h1 className="section-title">Contact Us</h1>

            <div className={styles.grid}>

                {/* Contact Form */}
                <div className={styles.card}>
                    <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>Request Consultation</h2>
                    <form>
                        <div>
                            <label className={styles.label}>Full Name</label>
                            <input type="text" className={styles.input} placeholder="Your Name" required />
                        </div>

                        <div>
                            <label className={styles.label}>Mobile Number</label>
                            <input type="tel" className={styles.input} placeholder="10-digit Mobile Number" required pattern="[0-9]{10}" />
                        </div>

                        <div>
                            <label className={styles.label}>Email Address</label>
                            <input type="email" className={styles.input} placeholder="your@email.com" />
                        </div>

                        <div>
                            <label className={styles.label}>Nature of Legal Issue</label>
                            <select className={styles.input}>
                                <option>Civil Matter</option>
                                <option>Criminal Matter</option>
                                <option>Family Dispute</option>
                                <option>Property Issue</option>
                                <option>Corporate/Legal Drafting</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} placeholder="Briefly describe your case..." required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <h3>Office Address</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                            <strong>KVNR Law Associates</strong><br />
                            Opposite Junior Civil Judge Court,<br />
                            Singarayakonda, Andhra Pradesh - 523101
                        </p>
                    </div>

                    <div className={styles.infoItem}>
                        <h3>Contact Details</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                            <strong>Mobile:</strong> +91 9848509619 <br />
                            <strong>Email:</strong> kvnarasimharao1999@gmail.com
                        </p>
                        <a href="tel:9848509619" className={styles.callBtn}>
                            📞 Call Now: 9848509619
                        </a>
                    </div>

                    <div className={styles.infoItem}>
                        <h3>Office Hours</h3>
                        <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                        <p>Sun: By Appointment Only</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
