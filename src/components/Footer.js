import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>KVNR Law Associates</h3>
                        <p>Advocates & Legal Consultants</p>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.address}>
                            <strong>Office Address:</strong><br />
                            Opposite Junior Civil Judge Court,<br />
                            Singarayakonda, Andhra Pradesh
                        </div>
                        <div className={styles.contact}>
                            <strong>Contact:</strong> 9848509619<br />
                            <strong>Email:</strong> kvnarasimharao1999@gmail.com
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {year} KVNR Law Associates. All rights reserved. <br />
                    <span style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '5px', display: 'block' }}>Powered by KMK Solutions</span>
                </div>
            </div>
        </footer>
    );
}
