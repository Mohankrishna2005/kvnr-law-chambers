import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>

        {/* Headings */}
        <div className="animate-fade-in">
          <h1 className={styles.title}>KVNR Law Associates</h1>
          <h2 className={styles.subtitle}>Advocates & Legal Consultants</h2>
        </div>

        {/* Premium Glass Quote Container */}
        <div className={styles.glassQuote}>
          <Image
            src="/founder.jpg"
            alt="K.V. Narasimha Rao"
            width={120}
            height={120}
            className={styles.avatar}
          />
          <span className={styles.quoteIcon}>“</span>
          <p className={styles.quoteText}>
            Led by <span className={styles.highlight}>Mr. K. V. Narasimha Rao</span>, we are committed to justice,
            professional integrity, and the rule of law. <br className="hidden-mobile" />
            We provide ethical legal representation across District Courts,
            High Courts, and Tribunals.
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.btnHeroPrimary}>
            Request Consultation
          </Link>
          <Link href="/about" className={styles.btnHeroSecondary}>
            Know More About Us
          </Link>
        </div>

      </div>
    </div>
  );
}
