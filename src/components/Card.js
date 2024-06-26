import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes } from "@fortawesome/free-solid-svg-icons";

const Card = ({ imageUrl, heading, description, title, date, content,modalIndicator }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };
  useEffect(()=>{
    if (showModal) {
      // When the modal is open, set the body overflow to hidden
      document.body.style.overflow = 'hidden';
    } else {
      // When the modal is closed, reset the body overflow
      document.body.style.overflow = 'auto';
    }
    modalIndicator(showModal)
  },[showModal])

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div>
        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <img src={imageUrl} alt='' className={styles.cardImage} />
        <p className={styles.description}>{description}</p>
        <div className={styles.hoverScroll}>
          <div className={styles.readMoreIndicator}>
            <span>READ MORE</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2>{title}</h2>
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.closeButton}
                onClick={handleCloseModal}
              />
            </div>
            <div className={styles.modalBody}>
              <p>{content}</p>
              <span>{date}</span>
            </div>
            <div className={styles.modalFooter}>
              {/* Social icons can be uncommented and used here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
