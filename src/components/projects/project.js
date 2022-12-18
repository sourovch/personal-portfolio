import React from 'react';

function Project({ info: { img, alt, title } }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={img} alt={alt} />
      </div>
      <h3 className="project-title">{title}</h3>
    </div>
  );
}

export default Project;
