// /* eslint-disable jsx-a11y/iframe-has-title */
// import "./contact.css";
// // import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <div className="container">
//       <div className="section__contact">
//         <div className="section__img">
//           <iframe
//             src="https://www.google.com/maps/d/embed?mid=1HkrgLZEwiy5p6tD_LapRKZkIk84wrBdt&ehbc=2E312F"
//             width="740"
//             height="400"
//             frameBorder="0"
//             allowFullScreen=""
//             aria-hidden="false"
//             tabIndex="0"
//           ></iframe>
//           <h4>Phone</h4>
//           <p>+4917757439</p>

//           <h4>Email</h4>
//           <p>lacehila@gmail.com</p>

//           <h4>Address</h4>
//           <p>Durener Strasse, Solingen</p>
//         </div>
//       </div>
//       <div className="section__contant">
//         {/* <Link to="/"> <ArrowBack className="arrow" /> </Link> */}

//         <div className="inputs">
//           <h1>Contact me!</h1>
//           <input type="text" placeholder="Name" />
//           <input type="text" placeholder="Email" />
//           <input type="text" placeholder="Message" className="message" />
//           <button>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import "./contact.css";
import Phone from "../../components/assets/phone.png";
import Email from "../../components/assets/email.png";
import Address from "../../components/assets/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service", "template", formRef.current, "user_lace").then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +49 177 99999999
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              lace@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Düner Str 01 Solingen Germany
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your project?</b> Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#999",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#999",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#999",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#999",
              }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
