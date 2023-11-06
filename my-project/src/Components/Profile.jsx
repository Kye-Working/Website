import chainsaw from "./Assets/Chainsaw.png";

function Profile() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="mt-20  w-96">
        <img src={chainsaw} alt="" className="border-2 border-black p-3 " />
        <h1 className="mt-8 mb-4 ">
          <u>Kye</u>
        </h1>
        <p className="w-96 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur
          numquam quam eligendi deleniti quaerat rerum ab. Quibusdam nulla
          laudantium cumque, odio dolor, similique voluptate asperiores, ipsum
          at amet aspernatur.
        </p>
      </div>
    </div>
  );
}

export default Profile;
