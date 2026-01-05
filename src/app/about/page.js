import Image from 'next/image';

export const metadata = {
    title: "About Us | KVNR Law Associates",
    description: "Learn about our commitment to justice, ethics, and responsible legal representation.",
};

export default function About() {
    return (
        <div className="container section">
            <h1 className="section-title">About Us</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--secondary)', boxShadow: 'var(--shadow-lg)' }}>
                        <Image
                            src="/founder.jpg"
                            alt="K.V. Narasimha Rao"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '0.5rem' }}>Led by K.V. Narasimha Rao</h2>
                    <p style={{ color: 'var(--secondary-dark)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Founder & Lead Counsel</p>
                </div>

                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    At <strong>KVNR Law Associates</strong>, we are driven by an unwavering commitment to justice and the rule of law. Established in Singarayakonda, our firm stands as a pillar of ethical legal practice, providing robust representation to individuals, families, and businesses alike.
                </p>

                <h3 style={{ marginTop: '2.5rem', color: 'var(--primary)' }}>Our Philosophy</h3>
                <p style={{ marginBottom: '1rem' }}>
                    We believe that every client deserves a fair hearing and competent representation. Our practice is built on the core values of integrity, transparency, and diligence. We do not just represent cases; we fight for the rights of our clients within the framework of the Indian legal system.
                </p>

                <h3 style={{ marginTop: '2.5rem', color: 'var(--primary)' }}>Client Confidentiality</h3>
                <p style={{ marginBottom: '1rem' }}>
                    We understand the sensitivity of legal matters. Client confidentiality is paramount to our practice. We ensure that all communications and case details are handled with the utmost discretion and security, fostering a relationship of trust and confidence.
                </p>

                <h3 style={{ marginTop: '2.5rem', color: 'var(--primary)' }}>Responsible Representation</h3>
                <p style={{ marginBottom: '1rem' }}>
                    We take pride in our responsible approach to litigation and advisory work. We provide honest assessments of legal positions, avoiding unrealistic guarantees while striving for the best possible outcome through rigorous preparation and legal acumen.
                </p>
            </div>
        </div>
    );
}
