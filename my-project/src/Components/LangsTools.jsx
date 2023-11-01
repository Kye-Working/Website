import html from "./Assets/html.png";
import css from "./Assets/css.png";
import js from "./Assets/js.png";
import tailwind from "./Assets/tailwind.png";
import react from "./Assets/react.png";
import office from "./Assets/office.png";
import github from "./Assets/github.png";

function LangTools() {
  return (
    <div className="flex justify-evenly border-solid border-2 border-slate-800 p-3 m-2">
      <div className="border-solid border-2 border-slate-800">
        <h1 className=" text-center">
          <u>Languages</u>
        </h1>
        <div className="flex">
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={js} alt="JS" />
        </div>
      </div>
      <div className="border-solid border-2 border-slate-800">
        <h1 className=" text-center">
          <u>Tools / Libraries</u>
        </h1>
        <div className="flex">
          <img src={tailwind} alt="TAILWIND" />
          <img src={react} alt="REACT" />
        </div>
      </div>
      <div className="border-solid border-2 border-slate-800">
        <div>
          <h1 className=" text-center">
            <u>Software</u>
          </h1>
          <div className="flex">
            <img src={office} alt="OFFICE" />
            <img src={github} alt="GITHUB" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangTools;
