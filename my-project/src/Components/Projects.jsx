import ml from "./Assets/ml.png";
import website from "./Assets/website.png";

function Project() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-center mt-16">
        <h1 className="mb-6">
          <u>Projects</u>
        </h1>
      </div>
      <div className="mb-6 border-4 rounded-2xl text-center border-[#FFFFFA]">
        <img src={ml} alt="" className="w-96 rounded-m" />
        <p className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          quibusdam qui eum delectus cum beatae ratione vero error itaque
          maiores! Alias vel placeat nesciunt molestias facilis pariatur ad
          suscipit illo!
        </p>
      </div>
      <div className="border-4 rounded-2xl text-center border-[#FFFFFA]">
        {" "}
        <img src={website} alt="" className="w-96 rounded-2xl" />
        <h2>
          <u>Website</u>
        </h2>
        <p className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, unde
          vero reiciendis dolores eum quo distinctio beatae ratione, eos
          aspernatur quia praesentium a sint, quos at asperiores omnis similique
          ea.
        </p>
      </div>
      <div className="w-96 border-b-4 border-[#912F40] mt-8 "></div>
    </div>
  );
}

export default Project;
