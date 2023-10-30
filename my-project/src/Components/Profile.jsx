import chainsaw from "./Assets/Chainsaw.png";

function Profile() {
  return (
    <div className="flex justify-center border-solid border-2 border-slate-800 p-3 m-2">
      <div>
        <img
          src={chainsaw}
          alt=""
          className="w-1/2 border-solid border-2 border-slate-800"
        />
      </div>
      <div className="w-1/5 border-solid border-2 border-slate-800 text-center">
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
