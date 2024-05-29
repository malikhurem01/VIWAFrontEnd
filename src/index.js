import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ViwaContextProvider } from "./Store/context-api";
import { current } from "./Services/AuthenticationService";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProjectsPage from "./Pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

const initialize = () => {
  return new Promise((resolve, reject) => {
    current()
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const startApplication = (user) => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ViwaContextProvider userData={user}>
        <RouterProvider router={router} />
      </ViwaContextProvider>
    </React.StrictMode>
  );
};

initialize()
  .then((user) => {
    startApplication(user);
  })
  .catch(() => startApplication(null));
