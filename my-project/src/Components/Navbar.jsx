import Day from "./Assets/Day.png";
import Night from "./Assets/Night.png";

function Navbar() {
  const ModeOn = () => {
    document.querySelector("body").style.background = "#080705";
    document.querySelector("body").style.color = "white";
    document.getElementById("OnButton").style.display = "none";
    document.getElementById("OffButton").style.display = "block";
  };
  const ModeOff = () => {
    document.querySelector("body").style.background = "white";
    document.querySelector("body").style.color = "#080705";
    document.getElementById("OffButton").style.display = "none";
    document.getElementById("OnButton").style.display = "block";
  };
  return (
    <nav className="bg-[#080705] w-full text-xs 2xl:text-lg p-1 ">
      <div className="grid grid-flow-col justify-center ">
        <div className=" 2xl:space-x-5 space-x-3  text-[#FFFFFA]  p-3 ">
          <a href="#" className="hover:text-[#912F40] hover:overline">
            Profile
          </a>
          <a href="#" className="hover:text-[#912F40] hover:overline">
            AboutMe
          </a>
          <a href="#" className="hover:text-[#912F40] hover:overline">
            Languages&Tools
          </a>
          <a href="#" className="hover:text-[#912F40] hover:overline">
            Projects
          </a>
          <a href="#" className="hover:text-[#912F40] hover:overline">
            WorkExperience
          </a>
          <a href="#" className="hover:text-[#912F40] hover:overline">
            Contact
          </a>
        </div>

        <button id="OnButton" onClick={ModeOn} className="text-white">
          <img src={Day} alt="" className="w-8 ml-8" />
        </button>
        <button
          id="OffButton"
          onClick={ModeOff}
          className="hidden text-red-700"
        >
          <img src={Night} alt="" className="w-8 ml-8" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
