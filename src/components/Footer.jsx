import React from 'react';
import styles from '../Styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Todos los derechos reservados</p>
      <div className={styles.socialLinks}>
        <a href="#" className={styles.socialLink}>Facebook</a>
        <a href="#" className={styles.socialLink}>Twitter</a>
        <a href="#" className={styles.socialLink}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
