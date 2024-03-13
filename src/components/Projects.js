// Projects.jsx

import React from "react";
import styles from "./Projects.module.scss"; // Replace with the actual path to your CSS module
import Card from "./Card";

const Projects = () => {
  // Dummy data for the CardList component
  const projectsData = [
    {
      itemCount: 1,
      heading: "Project 1",
      description: "Description for Project 1",
      details: "Details for Project 1",
    },
    {
      itemCount: 2,
      heading: "Project 2",
      description: "Description for Project 2",
      details: "Details for Project 2",
    },
    // Add more projects as needed
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
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
