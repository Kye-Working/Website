function Footer() {
  return (
    <footer className="w-full bg-[#080705]  lg:text-lg p-2">
      <div className="flex justify-evenly">
        <div className="space-x-5  text-[#FFFFFA] rounded-2xl p-3">
          <a href="" className="hover:text-[#912F40] hover:underline">
            Linkdin
          </a>
          <a href="" className="hover:text-[#912F40] hover:underline">
            Github
          </a>
          <a href="" className="hover:text-[#912F40] hover:underline">
            Email
          </a>
          <a href="" className="hover:text-[#912F40] hover:underline">
            Website
          </a>
          <a>| Copyright © {new Date().getFullYear()}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
