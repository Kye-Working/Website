import chainsaw from "./Assets/Chainsaw.png";

function Profile() {
  return (
    <div className="h-screen flex justify-center items-center space-x-2 ">
      <img src={chainsaw} alt="" className="  w-64 h-64 mb-48" />

      <div className="w-1/4 text-center mb-48">
        <h1>Kye</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          officia animi id quia veniam praesentium soluta quis molestias impedit
          exercitationem ad modi eius quae temporibus, atque nisi? Hic, quod
          distinctio?
        </p>
      </div>
    </div>
  );
}

export default Profile;
