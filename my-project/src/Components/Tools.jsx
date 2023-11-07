import html from "./Assets/html.png";
import css from "./Assets/css.png";
import js from "./Assets/js.png";
import tailwind from "./Assets/tailwind.png";
import react from "./Assets/react.png";
import office from "./Assets/office.png";
import github from "./Assets/github.png";

function Tools() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="mt-14">
        <h1>
          <u>Tools</u>
        </h1>
        <div className="flex">
          <img src={react} alt="" />
          <img src={github} alt="" />
          <img src={office} alt="" />
        </div>
        <div className="flex">
          <img src={tailwind} alt="" />
          <img src={react} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
      <div className="text-[#912F40]">__________________________________</div>
    </div>
  );
}

export default Tools;
