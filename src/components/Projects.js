// Projects.jsx

import React from "react";
import styles from "./Projects.module.scss"; // Replace with the actual path to your CSS module
import Card from "./Card";

const Projects = () => {
  // Dummy data for the CardList component
  const projectsData = [
    {
      itemCount: 1,
      heading: "Data4You Web Application",
      description: "Led Next.js/Recoil integration for Data4You, enhancing J&J's data flow. Pioneered automated testing with Jest.",
      title: "Data4You for Johnson & Johnson",
      date: "2021-2022",
      content: "Led the front-end development of the Data4You web application for Johnson & Johnson, leveraging Next.js and Recoil for state-of-the-art state management. Spearheaded the integration of RESTful APIs using Fetch, enhancing seamless data flow and backend communication. Pioneered the implementation of automated testing frameworks, including Jest, to maintain high code quality and reliability. Played a key role in architecting scalable and responsive solutions, optimizing the application for cross-platform functionality."
    },
    {
      itemCount: 2,
      heading: "Cargill Project",
      description: "Managed Cargill's platform development with React/Redux, focusing on data handling and UX enhancement.",
      title: "Cargill Data Management Platform",
      date: "2022",
      content: "As a Senior React Developer, orchestrated the development of Cargill's data management platform, focusing on robust data handling and user experience enhancement. Employed Redux for advanced state management, facilitating efficient data operations. Customized the user interface in alignment with client specifications using PrimeReact, ensuring a user-centric design. Fostered strong client relationships, actively gathering and implementing feedback to meet and exceed project requirements."
    },
    {
      itemCount: 3,
      heading: "Envision Project",
      description: "Developed Envision's Angular-based UI, addressing complex data and security requirements in logistics management.",
      title: "Envision Enterprise Suite",
      date: "2022-Present",
      content: "Engaged in the Envision project, developing an enterprise suite of business tools for logistics management. Utilized Angular to construct a dynamic user interface, tackling complex data handling and security challenges. Collaborated with cross-functional teams to deploy advanced security measures, safeguarding sensitive enterprise data. Contributed to the continuous enhancement of the product, driving innovation and ensuring the delivery of a comprehensive business solution."
    }
  ];
  
  



  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div  className={styles.cardList}>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
