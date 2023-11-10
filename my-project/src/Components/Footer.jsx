function Footer() {
  return (
    <footer className="w-full bg-[#080705]  lg:text-lg p-2">
      <div className="flex justify-evenly">
        <div className="space-x-5  text-[#FFFFFA] rounded-2xl p-3">
          <a href="" className="hover:text-[#912F40]">
            Linkdin
          </a>
          <a href="" className="hover:text-[#912F40]">
            Github
          </a>
          <a href="" className="hover:text-[#912F40]">
            Email
          </a>
          <a href="" className="hover:text-[#912F40]">
            Website
          </a>
          <a>| Copyright © {new Date().getFullYear()}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
