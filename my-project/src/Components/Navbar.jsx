function Navbar() {
  return (
    <nav className="bg-[#080705] fixed w-full text-xs lg:text-lg p-1">
      <div className="flex justify-center">
        <div className=" lg:space-x-5 space-x-3  text-[#FFFFFA]  p-3 ">
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
          <button id="LightMode">LIGHT/DARK</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
