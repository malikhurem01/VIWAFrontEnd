import React, { useState } from "react";
import "./Project.css";

const Project = ({ projects, onCreateProject, onGeneratePdf, onClose }) => {
  const [newProject, setNewProject] = useState("");

  const handleCreateClick = () => {
    if (newProject.trim()) {
      onCreateProject(newProject);
      setNewProject("");
    }
  };

  return (
    <div className='project-popup'>
      <div className='project-popup-inner'>
        <h2>Projects</h2>
        <div className='create-project'>
          <label htmlFor='new-project'>Create New Project:</label>
          <input
            type='text'
            id='new-project'
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
          />
          <button onClick={handleCreateClick}>Create</button>
        </div>
        <div className='project-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <span>{project}</span>
              <button onClick={() => onGeneratePdf(project)}>
                Generate PDF
              </button>
            </div>
          ))}
        </div>
        <button className='close-button' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Project;
