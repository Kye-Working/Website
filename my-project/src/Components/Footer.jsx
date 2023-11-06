function Footer() {
  return (
    <footer className="footer footer-center flex justify-between border-solid border-2 border-slate-800 p-3 m-2 mt-26">
      <div></div>
      <div className="text-center">
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
      <div>
        <a href="">@Kye</a>
      </div>
      <div className="space-x-5">
        <a href="">Linkdin</a>
        <a href="">Github</a>
        <a href="">Website</a>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
