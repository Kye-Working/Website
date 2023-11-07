function Contact() {
  return (
    <form
      action=""
      className="flex flex-col justify-center items-center text-center mt-24 mb-8"
    >
      <div className="">
        <h1>
          <u>Email</u>
        </h1>
        <input
          type="text"
          className="w-80 border-solid border-2 border-slate-800"
        />
        <h1>
          <u>Subject</u>
        </h1>
        <input
          type="text"
          name=""
          id=""
          className="w-80 border-solid border-2 border-slate-800"
        />
      </div>
      <div>
        <h1>
          <u>Message</u>
        </h1>
        <textarea
          type="text"
          name=""
          id=""
          className="w-80 h-80  border-solid border-2 border-slate-800"
        />
      </div>
      <button
        type="submit"
        className="w-16 h-8  m-2 border-solid border-2 border-slate-800"
      >
        Send
      </button>
    </form>
  );
}

export default Contact;
