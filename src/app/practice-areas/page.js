import styles from './practice.module.css';

export const metadata = {
    title: "Practice Areas | KVNR Law Associates",
    description: "Specialized legal services in Civil, Criminal, Family, Property, and Constitutional Law.",
};

const practices = [
    { title: "Civil Law", desc: "Handling property disputes, recovery suits, injunctions, and other civil litigations with precision.", icon: "⚖️" },
    { title: "Criminal Law", desc: "Defense representation in bail matters, trials, appeals, and quashing petitions before courts.", icon: "🔨" },
    { title: "Family Law", desc: "Compassionate legal support for divorce, child custody, maintenance, and restitution of conjugal rights.", icon: "👨‍👩‍👧" },
    { title: "Property & Real Estate", desc: "Expertise in property registration, title verification, partition suits, and land acquisition matters.", icon: "🏘️" },
    { title: "Constitutional Law", desc: "Filing Writ Petitions (Mandamus, Habeas Corpus, etc.) to protect fundamental rights.", icon: "🏛️" },
    { title: "Corporate & Commercial", desc: "Legal advisory for businesses, contract drafting, and dispute resolution for commercial entities.", icon: "🤝" },
    { title: "Legal Drafting & Advisory", desc: "Professional drafting of deeds, wills, legal notices, and comprehensive legal opinions.", icon: "📝" },
];

export default function PracticeAreas() {
    return (
        <div className="container section">
            <h1 className="section-title">Practice Areas</h1>

            <div className={styles.grid}>
                {practices.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <span className={styles.icon}>{item.icon}</span>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
