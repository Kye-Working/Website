import chainsaw from "./Assets/Chainsaw.png";

function Profile() {
  return (
    <div className="bg-[#080705] text-[#FFFFFA] flex flex-col justify-center items-center text-center ">
      <div className="mt-24 w-96">
        <img
          src={chainsaw}
          alt=""
          className="sm:rounded-full border-4 border-[#912F40] p-3 rounded-full"
        />
        <h1 className="mt-8">
          <u>Kye</u>
        </h1>
        <p className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur
          numquam quam eligendi deleniti quaerat rerum ab. Quibusdam nulla
          laudantium cumque, odio dolor, similique voluptate asperiores, ipsum
          at amet aspernatur.
        </p>
      </div>
      <div className="w-96 border-b-4 border-[#912F40] mt-8 "></div>
    </div>
  );
}

export default Profile;
