import html from "./Assets/html.png";
import css from "./Assets/css.png";
import js from "./Assets/js.png";
import tailwind from "./Assets/tailwind.png";
import react from "./Assets/react.png";
import office from "./Assets/office.png";
import github from "./Assets/github.png";

function LangTools() {
  return (
    <div className="h-[40rem] text-[#080705] flex flex-col justify-center items-center">
      <h1 className="mb-5">
        <u>Languages & Tools</u>
      </h1>
      <div className="2xl:flex 2xl:space-x-5 mb-20 text-center">
        <div className="w-96">
          <h1>
            <u>Languages</u>
          </h1>
          <div className="flex flex-row-2 w-96">
            <img src={html} alt="" className=" hover:animate-pulse" />
            <img src={css} alt="" className=" hover:animate-pulse" />
            <img src={js} alt="" className=" hover:animate-pulse" />
          </div>
        </div>
        <div className="w-96 mt-5">
          <h1>
            <u>Tools</u>
          </h1>
          <div className="flex flex-row-2 ">
            <img src={tailwind} alt="" className=" hover:animate-pulse" />
            <img src={react} alt="" className=" hover:animate-pulse" />
          </div>
        </div>
        <div className="w-96 mt-5">
          <h1>
            <u>Software</u>
          </h1>
          <div className="flex flex-row-2 ">
            <img src={github} alt="" className=" hover:animate-pulse" />
            <img src={office} alt="" className=" hover:animate-pulse" />
          </div>
        </div>
      </div>
      <div className="w-96 border-b-4 border-[#912F40] 2xl:mt-20 "></div>{" "}
    </div>
  );
}

export default LangTools;
