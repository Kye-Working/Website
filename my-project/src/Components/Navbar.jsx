function Navbar() {
  return (
    <nav className="fixed w-full text-xs lg:text-lg p-4">
      <div className="flex justify-center ">
        <div className="lg:space-x-5 space-x-3 bg-white border-2 rounded-full p-3 border-black">
          <a href="#" className="">
            Profile
          </a>
          <a href="#" className="">
            AboutMe
          </a>
          <a href="#" className="">
            Languages&Tools
          </a>
          <a href="#" className="">
            Projects
          </a>
          <a href="#" className="">
            WorkExperience
          </a>
          <a href="#" className="">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
