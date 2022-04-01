import "./project.css";

import React, { useState } from "react";
import data from "../../data";

const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <section className="project">
      {items.map((item) => {
        const { id, path, link, desc } = item;
        return (
          <div className="project-box" key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={path} alt={link} />
            </a>
            <div className="project-info">
              <p>{desc} </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
