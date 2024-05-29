// src/components/Features.js
import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faPen,
  faListUl,
  faCog,
  faChartBar,
  faMusic,
  faBook,
  faBrain,
  faRobot,
  faComments,
  faCalculator,
  faNewspaper,
  faClock,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW, faWeebly } from "@fortawesome/free-brands-svg-icons";

const Features = () => {
  return (
    <div className='features' id='features'>
      <h2>I can help you to...</h2>
      <div className='feature-row'>
        <div className='tab'>
          <FontAwesomeIcon icon={faImage} className='icon' />
          <h3>Describe an image</h3>
          <p>
            If you provide me any image, I can tell you all about its contents
            with details.
          </p>
        </div>
        <div className='tab'>
          <FontAwesomeIcon icon={faPen} className='icon' />
          <h3>Write a paper</h3>
          <p>
            Give me any topic and continue with your browsing. I will provide
            you a nicely structured PDF document with all the details about the
            given topic.
          </p>
        </div>
        <div className='tab'>
          <FontAwesomeIcon icon={faListUl} className='icon' />
          <h3>Summarize</h3>
          <p>
            Don't bother reading a long webpage, I will give you summarized
            version.
          </p>
        </div>
      </div>
      <div className='feature-row'>
        <div className='tab'>
          <FontAwesomeIcon icon={faCalculator} className='icon' />
          <h3>Perform calculations</h3>
          <p>
            Math whiz at your service! Need to crunch numbers, just throw them
            my way.
          </p>
        </div>
        <div className='tab'>
          <FontAwesomeIcon icon={faWikipediaW} className='icon' />
          <h3>Wikipedia</h3>
          <p>
            Knowledge at your fingertips! Dive into the world's knowledge! Ask
            me, and I'll search Wikipedia for the answer.
          </p>
        </div>
        <div className='tab'>
          <FontAwesomeIcon icon={faCloudSun} className='icon' />
          <h3>Current Weather Information</h3>
          <p>
            Feeling the heat? Need a chill? Planning your day? Worried about
            rain? Ask me for the latest weather conditions.
          </p>
        </div>
      </div>
      <div className='feature-row'>
        <div className='tab'>
          <FontAwesomeIcon icon={faComments} className='icon' />
          <h3>Chat with me</h3>
          <p>
            Curious about anything? No need to Google it! Ask me anything, and
            I'll do my best to find the answer.
          </p>
        </div>
        <div className='tab'>
          <FontAwesomeIcon icon={faNewspaper} className='icon' />
          <h3>Latest News</h3>
          <p>
            Stay informed, stay ahead. Get the hottest headlines delivered
            fresh.
          </p>
        </div>
        <div className='tab'>
          <FontAwesomeIcon icon={faClock} className='icon' />

          <h3>Current Time</h3>
          <p>
            Lost track of time? No worries, I've got the exact time on hand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
