// Card.jsx

import React, { useState } from "react";
import styles from "./Card.module.scss"; // Replace with the actual path to your CSS module

const Card = ({ itemCount, heading, description, details }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = (e) => {
    setShowModal(false);
    e.stopPropagation();
  };
  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.readMoreIndicator}>
        Click to read more <span className={styles.arrow}>&rarr;</span>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => handleCloseModal(e)}
        >
          <div className={styles.modalContent}>
            <span
              className={styles.closeButton}
              onClick={(e) => handleCloseModal(e)}
            >
              &times;
            </span>
            <h2>{heading}</h2>
            <p>{details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
