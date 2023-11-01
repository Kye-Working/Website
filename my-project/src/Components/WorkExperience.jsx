import chainsaw from "./Assets/Chainsaw.png";

function WorkExperience() {
  return (
    <div className="border-solid border-2 border-slate-800 p-3 m-2">
      <div className="flex justify-center mb-2">
        <h1>
          <u>Work Experience</u>
        </h1>
      </div>
      <div className="flex justify-center space-x-3">
        <img
          src={chainsaw}
          className="border-solid border-2 border-slate-800 w-64 h-64"
        />
        <div className="border-solid border-2 border-slate-800 w-1/4 p-1">
          <h1 className="text-center mt-5">
            <u>Job</u>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est
            non! Quidem iste voluptatem, sapiente et velit in aut sequi sed modi
            consequuntur eveniet ullam repudiandae autem quas veniam rem!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
