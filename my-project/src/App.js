import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Profile from "./Components/Profile.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import WorkExperience from "./Components/WorkExperience.jsx";
import LangTools from "./Components/LangsTools.jsx";
import Project from "./Components/Projects.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <WorkExperience></WorkExperience>
      <LangTools></LangTools>
      <Project></Project>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
