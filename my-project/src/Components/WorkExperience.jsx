import work from "./Assets/work.png";
function WorkExperience() {
  return (
    <div className="h-[40rem] text-[#080705] flex flex-col justify-center items-center">
      <div className="flex space-x-5 mb-20">
        <div>
          <img
            src={work}
            alt=""
            className=" rounded-full hidden 2xl:block mt-20"
          />
        </div>
        <div>
          <h1 className=" text-center">
            <u>Work Experience</u>
          </h1>
          <h2>Job</h2>
          <p className="w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            ipsa ad dolores repellat est magni perspiciatis similique, molestias
            facilis, nisi, numquam laboriosam reprehenderit officia. Labore
            rerum debitis voluptas facere.
          </p>
          <h2>Job</h2>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            iusto minima aperiam, nulla numquam voluptas consequatur, et eaque
            iste similique modi exercitationem consequuntur molestiae quia saepe
            ex sint possimus non.
          </p>
          <h2>Job</h2>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            iusto minima aperiam, nulla numquam voluptas consequatur, et eaque
            iste similique modi exercitationem consequuntur molestiae quia saepe
            ex sint possimus non.
          </p>
        </div>
      </div>
      <div className="w-96 border-b-4 border-[#912F40] 2xl:mt-20 "></div>
    </div>
  );
}

export default WorkExperience;
