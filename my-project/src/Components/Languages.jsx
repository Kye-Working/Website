import html from "./Assets/html.png";
import css from "./Assets/css.png";
import js from "./Assets/js.png";
import tailwind from "./Assets/tailwind.png";
import react from "./Assets/react.png";
import office from "./Assets/office.png";
import github from "./Assets/github.png";

function Languages() {
  return (
    <div className="text-[#080705] flex flex-col justify-center items-center text-center">
      <div className="mt-20">
        <h1>
          <u>Languages</u>
        </h1>
        <div className="flex">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
        </div>
        <div className="flex">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Languages;
