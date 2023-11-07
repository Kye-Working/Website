import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Profile from "./Components/Profile.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import WorkExperience from "./Components/WorkExperience.jsx";
import Languages from "./Components/Languages.jsx";
import Project from "./Components/Projects.jsx";
import Tools from "./Components/Tools.jsx";

document.body.style.backgroundColor = "#080705";
document.body.style.color = "#FFFFFA";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <WorkExperience></WorkExperience>
      <Languages></Languages>
      <Tools></Tools>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
