import "./skills.css";
import HTML from "./foto/html5.png";
import CSS from "./foto/css.png";
import JAVASCRIPT from "./foto/javascript.gif";
import REACT from "./foto/react.gif";
const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Chart.js</li>
          <li>Material-ui</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Eslint</li>
          <li>Webpack</li>
          <li>Chrome Dev</li>
          <li>Git & Github</li>
        </div>
      </div>

      <section className="glass">
        <div className="skill">
          <div className="status"></div>
          <div className="cards">
            <div className="card">
              <img className="img2" src={HTML} alt="" />
              <div className="card-info">
                <h2 className="lang-skill">HTML 5</h2>
                <p className="last-version">Latest Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">80%</h2>
            </div>
            <div className="card">
              <img className="img2" src={CSS} alt="" />
              <div className="card-info">
                <h2 className="lang-skill">CSS 3</h2>
                <p className="last-version">Latest Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">80%</h2>
            </div>
            <div className="card">
              <img className="img2" src={JAVASCRIPT} alt="" />
              <div className="card-info">
                <h2 className="lang-skill">JAVASCRIPT</h2>
                <p className="last-version">Latest Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
            <div className="card">
              <img className="img2" src={REACT} alt="" />
              <div className="card-info">
                <h2 className="lang-skill">REACT JS</h2>
                <p className="last-version">Latest Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
