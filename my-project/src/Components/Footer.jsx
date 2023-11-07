function Footer() {
  return (
    <footer className="w-full  lg:text-lg p-2">
      <div className="flex  justify-evenly">
        <div className="space-x-5 bg-[#FFFFFA] text-[#40434E] border-4 border-[#40434E] rounded-full p-3">
          <a href="">Linkdin</a>
          <a href="">Github</a>
          <a href="">Email</a>
          <a href="">Website</a>
          <a>| Copyright © {new Date().getFullYear()}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
