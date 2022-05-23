import SectionTitle from "./SectionTitle";

import "../assets/css/scss/components/_experience.scss";

const Experience = () => {
  return (
    <div>
      <SectionTitle name="Experience" />
      <ul className="job-title">
      <li>Web Developer and Digital Marketer</li>
      </ul>
      <div>Freelance / Self-Employed, Asheville, NC</div>
      <ul>
        <li>
          React.js, JavaScript ES5/ES6, Node, NPM, HTML5, CSS3, REST APIs,
          CMS’s, SQL and more
        </li>
        <li>
          Working freelance and building websites for both non-profit and
          for-profit businesses
        </li>
        <li>
          Volunteering through Patagonia‘s Action Works optimizing non-profit’s
          websites to support their activism efforts
        </li>
        <li>
          Completing a 55 hour full-stack coding bootcamp with a focus on web
          application development
        </li>
        <li>Completing projects only to the highest standards</li>
        <li>
          Continuing to self-educate on best practices and all things web
          development
        </li>
      </ul>
    </div>
  );
};

export default Experience;
