import styles from './experience.module.css';

export const metadata = {
    title: "Our Experience | KVNR Law Associates",
    description: "25+ Years of professional legal experience in Civil, Criminal, and Family law across District and High Courts.",
};

export default function Experience() {
    return (
        <div className={styles.container}>
            {/* A. Page Title Section */}
            <div className={styles.header}>
                <h1 className={styles.title}>Our Experience</h1>

                <div className="animate-fade-in">
                    <span className={styles.experienceBadge}>
                        25+ Years of Professional Legal Experience
                    </span>
                </div>

                <h2 className={styles.subtitle}>
                    Litigation, Advisory, and Legal Representation
                </h2>
                <p className={styles.intro}>
                    Serving clients across District Courts, High Courts, and Tribunals with integrity and legal precision.
                </p>
            </div>

            {/* B. Areas of Expertise Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    Over the last 25 years, we have handled a wide spectrum of legal matters including but not limited to:
                </p>

                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Civil Litigation</h3>
                        <ul className={styles.cardList}>
                            <li>Property Disputes & Partition Suits</li>
                            <li>Landlord-Tenant Disputes</li>
                            <li>Injunctions & Stay Orders</li>
                            <li>Specific Performance Suits</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Criminal Defence</h3>
                        <ul className={styles.cardList}>
                            <li>Bail & Anticipatory Bail</li>
                            <li>Trials under BNS & IPC</li>
                            <li>Cheating & Fraud Cases</li>
                            <li>Cyber Crime Defence</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Family Law</h3>
                        <ul className={styles.cardList}>
                            <li>Divorce & Mutual Consent</li>
                            <li>Child Custody & Maintenance</li>
                            <li>Restitution of Conjugal Rights</li>
                            <li>Domestic Violence Cases</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Consumer & Other</h3>
                        <ul className={styles.cardList}>
                            <li>Consumer Protection Claims</li>
                            <li>Motor Accident Claims (MACT)</li>
                            <li>Cheque Bounce (NI Act)</li>
                            <li>Compensation Suits</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* C. Court Practice Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Court Practice & Representation</h2>
                <div className={styles.listGrid}>
                    <div className={styles.listItem}>
                        <div className={styles.itemHeading}>District Courts</div>
                        <div className={styles.itemDesc}>Regular practice in Civil & Sessions Courts</div>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.itemHeading}>High Courts</div>
                        <div className={styles.itemDesc}>Writ Petitions, Appeals & revisions</div>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.itemHeading}>Tribunals</div>
                        <div className={styles.itemDesc}>Representation in specialized statutory bodies</div>
                    </div>
                </div>
            </section>

            {/* D. Advisory & Drafting Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Advisory & Legal Drafting</h2>
                <div className={styles.listGrid}>
                    <div className={styles.listItem}>
                        <div className={styles.itemHeading}>Legal Notices</div>
                        <div className={styles.itemDesc}>Drafting and replying to notices</div>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.itemHeading}>Contracts</div>
                        <div className={styles.itemDesc}>Agreements, Sale Deeds & Wills</div>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.itemHeading}>Consultation</div>
                        <div className={styles.itemDesc}>Pre-litigation strategy & advice</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
