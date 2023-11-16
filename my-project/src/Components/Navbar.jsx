function Navbar() {
  return (
    <nav className="bg-[#080705] fixed w-full text-xs 2xl:text-lg p-1 ">
      <div className="flex justify-center ">
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
      </div>
    </nav>
  );
}

export default Navbar;
