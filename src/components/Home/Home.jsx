import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Lace</p>
          <p>Student Web Developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>

      <div className="person">
        {<img src={`${process.env.PUBLIC_URL}/laceBg.png`} alt="" />}
      </div>
    </div>
  );
};

export default Home;
