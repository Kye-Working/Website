function Contact() {
  return (
    <form
      action=""
      className="flex flex-col justify-center items-center text-center mt-24 mb-4"
    >
      <div className="">
        <h1>
          <u>Email</u>
        </h1>
        <input
          type="text"
          className="w-80 border-2 border-[#912F40] rounded-full p-1 text-[#40434E]"
        />
        <h1>
          <u>Subject</u>
        </h1>
        <input
          type="text"
          name=""
          id=""
          className="w-80 border-2 border-[#912F40] rounded-full p-1 text-[#40434E]"
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
          className="w-80 h-80 border-2 border-[#912F40] text-[#40434E] rounded-xl p-1"
        />
      </div>
      <button
        type="submit"
        className="w-16 h-8  m-2 border-2 border-[#912F40] rounded-full"
      >
        <u>Send</u>
      </button>
      <div className="text-[#912F40]">__________________________________</div>
    </form>
  );
}

export default Contact;
