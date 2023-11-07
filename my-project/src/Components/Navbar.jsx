function Navbar() {
  return (
    <nav className="fixed w-full bg-white border-b-2 border-black text-xs lg:text-lg p-4">
      <div className="flex justify-center">
        <div className="lg:space-x-5 space-x-3">
          <a href="" className="lg:mr-12 sm:mr-4">
            @Kye
          </a>
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
