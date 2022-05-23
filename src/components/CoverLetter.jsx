
import SectionTitle from "./SectionTitle";

import "../assets/css/scss/components/_cover-letter.scss";

const CoverLetter = () => {
  const todaysDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const sectionTitle = 'C/V';
  return (
    <div>
      <SectionTitle name="C/V" />
      <p className="cv__date">{todaysDate}</p>
      <div className="cv__address-wrapper">
        <p className="cv__address-item">Hiring Manager</p>
        <p className="cv__address-item">Recreational Equipment, Inc.</p>
        <p className="cv__address-item">1700 45th ST East, Suite 101</p>
        <p className="cv__address-item">Sumner, WA 98352</p>
      </div>
      <p>Dear Hiring Manager - </p>
      <p>
        In my 5 years as a project manager / marketing strategist at digital
        agencies, I was the linchpin in driving innovative web-based
        technologies that generated exceptional user experiences. I successfully
        increased clients’ revenue and brand exposure through highly effective
        communication and coordination with owners, executives, and through
        leading an internal team of 20+ programmers, designers, writers and
        strategists. I often achieved and surpassed all parties’ expectations,
        and in one year, my efforts equated to a $250k YoY increase in my
        employer‘s revenue after driving my clients’ initiatives.
      </p>
      <p>
        Having worked closely with developers in the past, I’ve always had a
        desire to create and connect technologies to provide better experiences
        for both customers and organizations. In reviewing my interests,
        passions, goals, and desires in life, I decided becoming a developer
        greatly aligned with where I wanted to invest my time. Below outlines my
        pertinent knowledge and development experience for the position:
      </p>
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
      <p>
        I‘m excited to discover this web development opportunity at REI where I
        can continue to give my all to a company I feel does the same for me. I
        am confident this internship is a perfect fit as it encompasses the main
        driving forces in my life - my passion for the outdoors, development and
        effective leadership. Please feel free to reach out to further discuss
        my qualifications.
      </p>
      <p>
        Thank you for your time, and I look forward to hearing from you soon.
        All the best,
      </p>
      <p>-Dan</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default CoverLetter;
