import html from "./Assets/html.png";
import css from "./Assets/css.png";
import js from "./Assets/js.png";
import tailwind from "./Assets/tailwind.png";
import react from "./Assets/react.png";
import office from "./Assets/office.png";
import github from "./Assets/github.png";

function LangTools() {
  return (
    <div className="h-[40rem] flex flex-col justify-center items-center mt-10 ">
      <div className="2xl:flex mb-20 text-center">
        <div className="w-80 border-2   2xl:h-88 ">
          <h1 className=" border-b-2 ">Languages</h1>
          <div className="flex flex-row-3 w-96">
            <img
              src={html}
              alt=""
              title="HTML"
              className=" scale-100 hover:scale-125"
            />
            <img
              src={css}
              alt=""
              title="CSS"
              className="scale-100 hover:scale-125 "
            />
            <img
              src={js}
              alt=""
              title="JavaScript"
              className="scale-100 hover:scale-125 "
            />
          </div>
          <div className="flex flex-row-3 w-96">
            <img src={html} alt="" className=" " />
            <img src={css} alt="" className=" " />
            <img src={js} alt="" className=" " />
          </div>
          <div className="flex flex-row-3 w-96">
            <img src={html} alt="" className=" " />
            <img src={css} alt="" className=" " />
            <img src={js} alt="" className=" " />
          </div>
        </div>
        <div className="w-80 border-x-2 2xl:border-x-0 2xl:border-y-2   2xl:h-88 ">
          <h1 className=" border-b-2 ">Tools</h1>
          <div className="flex flex-row-2 ">
            <img src={tailwind} alt="" className="" />
            <img src={react} alt="" className=" " />
          </div>
        </div>
        <div className="w-80  border-2  2xl:h-88 ">
          <h1 className=" border-b-2 ">Software</h1>
          <div className="flex flex-row-2 ">
            <img src={github} alt="" className=" " />
            <img src={office} alt="" className=" " />
          </div>
        </div>
      </div>
      <div className="w-96 border-b-4 border-[#912F40] 2xl:mt-20 "></div>{" "}
    </div>
  );
}

export default LangTools;
