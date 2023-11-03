function Navbar() {
  return (
    <nav className="fixed p-4 w-full bg-white border-2 border-black text-xs lg:text-lg">
      <div className="flex justify-center">
        <div className="space-x-5">
          <a href="" className="mr-16 ">
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
