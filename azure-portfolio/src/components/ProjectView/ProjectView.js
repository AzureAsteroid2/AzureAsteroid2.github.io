import React from 'react';
import './ProjectView.css'
const ProjectView = ({ imageSrc, text}) => {
    return (
      <div className="square">
        <img src={imageSrc} alt="Square content" className="square-image" />
        <p className="square-text">{text}</p>
      </div>
    );
  };
  export default ProjectView;
