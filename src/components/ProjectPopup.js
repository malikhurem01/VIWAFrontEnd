const ProjectPopup = ({ project }) => {
  return (
    <div>
      <input type="text" value={project.name} />
    </div>
  );
};

export default ProjectPopup;
