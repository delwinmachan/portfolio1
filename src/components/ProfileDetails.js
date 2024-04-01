import React, { useEffect, useState } from "react";
import styles from "./ProfileDetails.module.scss";
import profilePicture from "../images/pro2.jpeg";
import Typewriter from "./TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ProfileDetails = ({activeTheme}) => {
  const iconStyle = {
    color: activeTheme!=="dark"?"white":"black",
    margin: "10px",
    fontSize: "22px", // Adjust the size as needed
  };

  return (
    <div className={styles.profileDetails}>
      <div className={styles.profile}>
        <div className={styles.circle}></div>
        <div className={styles.profilePictureContainer}>
          <img
            src={profilePicture}
            alt='Your Profile'
            className={styles.profilePicture}
          />
        </div>
      </div>

      {/* Add your portfolio details here */}
      <div className={styles.portfolioDetails}>
        <h1>DELWIN THOMAS</h1>
        <div className={styles.typeWriterDiv}>
          <Typewriter text='Dreamer' delay={250} infinite />
        </div>

        <p>
          Bengaluru-Based Web Alchemist: Transforming Ideas into Globally
          Celebrated Applications, One Innovation at a Time!
        </p>
        <div>
          <a
            href='https://www.linkedin.com/in/delwin-thomas-934789215/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} style={iconStyle} />
          </a>
          <a
            href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
          </a>
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
