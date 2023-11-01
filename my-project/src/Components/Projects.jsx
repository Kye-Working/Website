import chainsaw from "./Assets/Chainsaw.png";
import react from "./Assets/react.png";
import tailwind from "./Assets/tailwind.png";
import js from "./Assets/js.png";

function Project() {
  return (
    <div className="border-solid border-2 border-slate-800 p-3 m-2">
      <h1 className="flex justify-center mb-2">
        <u>Projects</u>
      </h1>
      <div className="flex justify-center space-x-10 ">
        <img
          src={chainsaw}
          alt=""
          className="h-64 w-64 border-solid border-2 border-slate-800"
        />
        <div className=" w-64 border-solid border-2 border-slate-800">
          <h2 className=" text-center">
            <u>Project</u>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            maxime doloribus id! Commodi, molestias voluptatem. Cupiditate, non
            iure iste delectus exercitationem, libero magni maiores optio animi
            voluptas eum! Hic, iure!
          </p>
        </div>
        <div className=" w-64 border-solid border-2 border-slate-800">
          <h2 className=" text-center">
            <u>Languages & Tools</u>
          </h2>
          <div className="grid grid-flow-col-dense">
            <img src={react} alt="" />
            <img src={tailwind} alt="" />
            <img src={js} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
