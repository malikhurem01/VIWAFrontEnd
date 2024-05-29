import React, { useContext, useState } from "react";
import ViwaContext from "../Store/context-api";
import ProjectPopup from "./ProjectPopup";

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ctx = useContext(ViwaContext);
  const handleOpenModifyPopup = () => {};
  return (
    <React.Fragment>
      {selectedProject && <ProjectPopup project={selectedProject} />}
      <ul>
        {ctx.projects.map((l) => {
          return (
            <div>
              <h3>{l.name}</h3>
              <button id={l.id} onClick={handleOpenModifyPopup}>
                Change name
              </button>
              <button>Generate PDF!</button>
              <button>Delete</button>
            </div>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ProjectsList;
