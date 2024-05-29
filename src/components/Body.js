// src/components/Body.js
import React, { useContext } from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import ViwaContext from "../Store/context-api";

const Body = () => {
  var ctx = useContext(ViwaContext);
  return (
    <section className="body">
      {ctx.user && <h1>Welcome, {ctx.user.firstName}</h1>}
      {!ctx.user && <h1>Your Personal Virtual AI Assistant</h1>}
      {ctx.user && (
        <h2 style={{ fontSize: 40 }}>VIWA is your personal AI Assistant</h2>
      )}
      <p>
        VIWA is an artificial intelligence bot, can perform tasks through your
        voice commands such as: telling the current time & weather, searching on
        Wikipedia, latest news headlines, describe images, summarize, process &
        organize data from webpages, mathematical calculations, play on YouTube,
        say jokes and more...
      </p>
      <button className="chrome-extension-button">
        <FontAwesomeIcon icon={faChrome} />
        Add to Chrome - It's Free
      </button>
    </section>
  );
};

export default Body;
