function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-black text-xs lg:text-lg p-2">
      <div className="flex justify-evenly">
        <a href="" className="lg:mr-12 sm:mr-4">
          @Kye
        </a>
        <div className="space-x-5 ">
          <a href="">Linkdin</a>
          <a href="">Github</a>
          <a href="">Website</a>
        </div>
        <p className="ml-4">Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
