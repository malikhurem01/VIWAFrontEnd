import React, { useCallback, useState } from "react";

const ViwaContext = React.createContext({
  user: null,
  handleSetUser: () => {},
  projects: null,
  handleSetProjects: () => {},
});

export default ViwaContext;

export const ViwaContextProvider = ({ userData, children }) => {
  const [user, setUser] = useState(userData);
  const [projects, setProjects] = useState([]);

  const handleSetUser = (user) => {
    setUser(user);
  };

  const handleSetProjects = useCallback((projects) => {
    setProjects(projects);
  }, []);

  return (
    <ViwaContext.Provider
      value={{
        user,
        projects,
        handleSetProjects,
        handleSetUser,
      }}
    >
      {children}
    </ViwaContext.Provider>
  );
};
