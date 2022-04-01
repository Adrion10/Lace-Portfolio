import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import NavBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";

import "./app.css";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Router>
      <div
        className="app"
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <NavBar />
        <Toggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
