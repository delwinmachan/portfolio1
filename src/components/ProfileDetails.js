import React, { useEffect, useState } from "react";
import styles from "./ProfileDetails.module.scss";
import profilePicture from "../images/pro2.jpeg";
import Typewriter from "./TypingEffect";

const ProfileDetails = () => {
  return (
    <div className={styles.profileDetails}>
      <div className={styles.profile}>
      <div  className={styles.circle}></div>
        <div className={styles.profilePictureContainer}>
          <img
            src={profilePicture}
            alt="Your Profile"
            className={styles.profilePicture}
          />
          
        </div>
      </div>

      {/* Add your portfolio details here */}
      <div className={styles.portfolioDetails}>
        <h1>DELWIN THOMAS</h1>
        <div className={styles.typeWriterDiv}>
          <Typewriter text="Dreamer" delay={250} infinite />
        </div>

        <p>
          Bengaluru-Based Web Alchemist: Transforming Ideas into Globally
          Celebrated Applications, One Innovation at a Time!
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
