import React from 'react';
import styles from './ContactInfo.module.scss'; // Make sure to use the correct path to your SCSS file

const ContactInfo = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactItem}>
        <h3 className={styles.contactTitle}>Email</h3>
        <p className={styles.contactDetail}>delwintom@gmail.com</p>
      </div>
      <div className={styles.contactItem}>
        <h3 className={styles.contactTitle}>Phone</h3>
        <p className={styles.contactDetail}>9526776443</p>
      </div>
      <div className={styles.contactItem}>
        <h3 className={styles.contactTitle}>LinkedIn</h3>
        <a className={styles.contactDetail} href="https://www.linkedin.com/in/delwin-thomas-934789215/" target="_blank" rel="noopener noreferrer">
          delwin-thomas-934789215
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
