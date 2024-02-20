// pages/portfolio.js

import React from "react";
import styles from "./About.module.scss"; // Import SCSS module
import profilePicture from "../images/pro2.jpeg";
const About = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/resume-2023.pdf";
    link.download = "resume-2023.pdf";
    link.click();
  };
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.about}>About Me</div>
      <div className={styles.profileSection}>
        <h1 className={styles.profileName}>Delwin Thomas</h1>
         {/* Add a subtle separator */}
     
        <p className={styles.profileDescription}>
          Hello! I'm Delwin Thomas, a results-driven web developer specializing
          in React, Next.js, and JavaScript. With a strong command of Recoil and
          Redux for efficient state management, I bring proficiency in Angular
          and experience in crafting robust web applications. My skills extend
          to utilizing testing libraries such as Jest to ensure code quality.
        </p>
      </div>
      <div className={styles.separator}></div>
      <div  className={styles.aboutSection}>
      <div className={styles.column}>
          <div className={styles.detail}>
            <span>Birthday</span>
            <span>29/04/1998</span>
          </div>
          <div className={styles.detail}>
            <span>Birthday</span>
            <span>29/04/1998</span>
          </div>
          <div className={styles.detail}>
            <span>Birthday</span>
            <span>29/04/1998</span>
          </div>
          {/* Add more details in the same format */}
        </div>
        <div className={styles.column}>
          <div className={styles.detail}>
            <span>Birthday</span>
            <span>29/04/1998</span>
          </div>
          <div className={styles.detail}>
            <span>Birthday</span>
            <span>29/04/1998</span>
          </div>
          <div className={styles.detail}>
            <span>Birthday</span>
            <span>29/04/1998</span>
          </div>
          {/* Add more details in the same format */}
        </div>
        </div>
        
      <div className={styles.separator}></div>
      
        <div>
        <button onClick={downloadCV} className={styles.downloadButton}>
          Download CV
        </button>
      </div>
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsHeader}>Skills</h2>
        <div className={styles.skill}>
          <span className={styles.skillName}>React</span>
          <div className={styles.progressBar} style={{ width: "80%" }}></div>
        </div>
        {/* Add more skills with progress bars */}
      </div>
    </div>
  );
};

export default About;
