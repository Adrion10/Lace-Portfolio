import "./about.css";
import foto from "../assets/lace-foto.jpg";

const About = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={foto} alt="" />
        </div>
        <div className="section__content">
          <h2 className="biografi">Who is Lace</h2>
          <p>17 years Navy Officer</p>
          <p>Diving Instractor</p>
          <p>Business Administration</p>
          <p>1 years experience in Programming</p>
          <p>Javascript Developer</p>
          <p>React js Developer</p>
        </div>
      </div>
    </div>

    // <div/>
  );
};

export default About;
