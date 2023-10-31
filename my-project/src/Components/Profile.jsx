import chainsaw from "./Assets/Chainsaw.png";

function Profile() {
  return (
    <div className="flex justify-center space-x-2 border-solid border-2 border-slate-800 p-3 m-2">
      <img
        src={chainsaw}
        alt=""
        className="  border-solid border-2 border-slate-800 w-64 h-64 "
      />

      <div className="w-1/4 border-solid border-2 border-slate-800 text-center">
        <h1 className="mt-14">Kye</h1>
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
