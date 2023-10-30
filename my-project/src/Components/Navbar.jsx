function Navbar() {
  return (
    <nav className=" flex justify-between border-solid border-2 border-slate-800 p-3 m-2">
      <div className="">
        <a href="#" className="">
          @Kye
        </a>
      </div>
      <div className=" space-x-5">
        <a href="#" className="">
          Profile
        </a>
        <a href="#" className="">
          About-Me
        </a>
        <a href="#" className="">
          Projects
        </a>
        <a href="#" className="">
          Contact
        </a>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
