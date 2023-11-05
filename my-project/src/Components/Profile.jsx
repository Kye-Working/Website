import chainsaw from "./Assets/Chainsaw.png";

function Profile() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <img
        src={chainsaw}
        alt=""
        className="border-2 border-black p-3 md:h-96 h-80 "
      />
      <h1 className="mt-8 mb-4">
        <u>Kye</u>
      </h1>
      <p className="w-72">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur
        numquam quam eligendi deleniti quaerat rerum ab. Quibusdam nulla
        laudantium cumque, odio dolor, similique voluptate asperiores, ipsum at
        amet aspernatur.
      </p>
    </div>
  );
}

export default Profile;
