import { useCallback, useContext, useEffect } from "react";
import classes from "./ProjectsBody.module.css";
import { fetchProjects } from "../Services/ProjectsService";
import ViwaContext from "../Store/context-api";
import ProjectsList from "./ProjectsList";
import "./Header.css";
const ProjectsBody = () => {
  const ctx = useContext(ViwaContext);

  const loadProjects = useCallback(async () => {
    const res = await fetchProjects(ctx.user.id);
    ctx.handleSetProjects(res.data.data);
  }, [ctx]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);
  return (
    <div className={classes.projectsBody}>
      <h1 style={{ fontSize: 40 }}>Create, modify and download projects!</h1>
      {ctx.projects?.length === 0 && (
        <h1 style={{ fontSize: 30 }}>
          Hmmm, no projects active.{" "}
          <button className="start-button">Create one?</button>
        </h1>
      )}
      <ProjectsList />
    </div>
  );
};

export default ProjectsBody;
