// Projects.jsx

import React, { useEffect, useState } from "react";
import styles from "./Projects.module.scss"; // Replace with the actual path to your CSS module
import Card from "./Card";

const Projects = () => {
  // Dummy data for the CardList component
  const projectsData = [
    {
      itemCount: 1,
      heading: "Data4You Project",
      description:
        "Led Next.js/Recoil integration for Data4You, enhancing J&J's data flow. Pioneered automated testing with Jest.",
      title: "Data4You for Johnson & Johnson",
      date: "2022-2024",
      content:
        "Led the front-end development of the Data4You web application for Johnson & Johnson, leveraging Next.js and Recoil for state-of-the-art state management. Spearheaded the integration of RESTful APIs using Fetch, enhancing seamless data flow and backend communication. Pioneered the implementation of automated testing frameworks, including Jest, to maintain high code quality and reliability. Played a key role in architecting scalable and responsive solutions, optimizing the application for cross-platform functionality.",
      imageUrl: "data4You.jpeg",
    },
    {
      itemCount: 2,
      heading: "Cargill Project",
      description:
        "Managed Cargill's platform development with React/Redux, focusing on data handling and UX enhancement.",
      title: "Cargill Data Management Platform",
      date: "2022",
      imageUrl: "cargill.jpeg",
      content:
        "As a Senior React Developer, orchestrated the development of Cargill's data management platform, focusing on robust data handling and user experience enhancement. Employed Redux for advanced state management, facilitating efficient data operations. Customized the user interface in alignment with client specifications using PrimeReact, ensuring a user-centric design. Fostered strong client relationships, actively gathering and implementing feedback to meet and exceed project requirements.",
    },
    {
      itemCount: 3,
      heading: "Envision Project",
      description:
        "Developed Envision's Angular-based UI, addressing complex data and security requirements in logistics management.",
      title: "Envision Enterprise Suite",
      date: "2022-Present",
      imageUrl: "envision.jpeg",
      content:
        "Engaged in the Envision project, developing an enterprise suite of business tools for logistics management. Utilized Angular to construct a dynamic user interface, tackling complex data handling and security challenges. Collaborated with cross-functional teams to deploy advanced security measures, safeguarding sensitive enterprise data. Contributed to the continuous enhancement of the product, driving innovation and ensuring the delivery of a comprehensive business solution.",
    },
    {
      itemCount: 4,
      heading: "Consultopedia Project",
      description:
        "Orchestrated the Consultopedia platform to facilitate free doctor appointment bookings for the underprivileged.",
      title: "Consultopedia Free Booking Platform",
      date: "2021",
      imageUrl: "consultopedia.jpeg",
      content:
        "Led the development of the Consultopedia platform, a revolutionary service aiming to provide free medical consultation slots for the underprivileged. Engineered a user-friendly booking system, integrating seamless appointment scheduling functionalities with real-time availability updates. Focused on creating an accessible interface to ensure easy navigation and booking process for users. Worked closely with healthcare professionals to understand their scheduling needs, incorporating features that allow for efficient time management and patient care. The project played a pivotal role in bridging the healthcare accessibility gap, ensuring that essential medical services are available to those in need.",
    },
    {
      itemCount: 5,
      heading: "CDR Project",
      description:
        "An extension of the Data4You project, enhancing clinical data examination versatility with advanced React Flow visualizations.",
      title: "CDR Clinical Data Review",
      date: "2024-Present",
      imageUrl: "cdrProject.jpeg",
      content:
        "Building upon the foundation laid by the Data4You project for Johnson & Johnson, the CDR project aims to further enhance the versatility of clinical data examination. This initiative focuses on developing more advanced features and integrations to handle complex datasets, with a keen eye on improving data analysis and visualization capabilities within the healthcare sector. React Flow is utilized for its dynamic node-based UI, enabling clinicians to visualize and manipulate complex data streams effectively. Additionally, Recoil is integrated for state management, ensuring seamless state synchronization across the application's various components.",
    },
    {
      itemCount: 6,
      heading: "Focus Project",
      description:
        "A personal React Native project aimed at enhancing productivity through customized task management and the Pomodoro technique",
      title: "Focus Productivity App",
      date: "2024-Present",
      imageUrl: "focusApp.jpeg",
      content:
        "The Focus project represents a personal endeavor to create a React Native application that empowers users to enhance their productivity. It features customizable Pomodoro timers, personalized alarm tones, and task management functionalities. Focus is designed to help users streamline their work process and boost efficiency. Leveraging Recoil for state management, the app ensures consistent and predictable state throughout the user's productivity journey, accommodating complex state logic with ease. Whether it's managing to-dos or ensuring focused work intervals, Focus provides the tools necessary for users to optimize their daily routine.",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setModalOpen(false);
  }, []);

  function modalIndicator(value) {
    value && setModalOpen(value);
  }

  return (
    <div
      className={`${styles.projects} ${
        modalOpen && styles.projectsNoAnimation
      }`}
    >
      <h2>Projects</h2>
      <div className={styles.cardList}>
        {projectsData.map((project, index) => (
          <Card
            key={index}
            itemCount={project.itemCount}
            heading={project.heading}
            description={project.description}
            details={project.details}
            title={project.title}
            date={project.date}
            content={project.content}
            imageUrl={project.imageUrl}
            modalIndicator={modalIndicator}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
