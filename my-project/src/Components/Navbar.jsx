import sun from "./Assets/sun.png";

function Navbar() {
  return (
    <nav className="fixed w-full text-xs lg:text-lg p-4">
      <div className="flex justify-center">
        <div className=" lg:space-x-5 space-x-3 bg-[#080705] text-[#FFFFFA] border-4 rounded-2xl p-3 border-[#912F40]">
          <a href="#" className="hover:text-[#912F40]">
            Profile
          </a>
          <a href="#" className="hover:text-[#912F40]">
            AboutMe
          </a>
          <a href="#" className="hover:text-[#912F40]">
            Languages&Tools
          </a>
          <a href="#" className="hover:text-[#912F40]">
            Projects
          </a>
          <a href="#" className="hover:text-[#912F40]">
            WorkExperience
          </a>
          <a href="#" className="hover:text-[#912F40]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
