function Contact() {
  return (
    <form
      action=""
      className="justify-evenly text-center border-solid border-2 border-slate-800 p-3 m-2"
    >
      <div className="">
        <h1>Email</h1>
        <input
          type="text"
          className="w-80 rounded-lg border-solid border-2 border-slate-800"
        />
        <h1>Subject</h1>
        <input
          type="text"
          name=""
          id=""
          className="w-80 rounded-lg border-solid border-2 border-slate-800"
        />
      </div>
      <div>
        <h1>Message</h1>
        <textarea
          type="text"
          name=""
          id=""
          className="w-80 h-80 rounded-lg border-solid border-2 border-slate-800"
        />
      </div>
      <button
        type="submit"
        className="w-16 h-8 rounded-lg m-2 border-solid border-2 border-slate-800"
      >
        Send
      </button>
    </form>
  );
}

export default Contact;
