import React from "react";

function Contact2() {
  return (
    <div
      name="contact"
      className="w-full  h-screen bg-[rgb(91,47,159)] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bgdylgra"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            <span className="hover:scale-105 hover:text-pink-600">
              <a href="mailto:jha.sudhanshu28@gmail.com">
                jha.sudhanshu28@gmail.com
              </a>
            </span>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] py-2 px-4  rounded-2xl"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 py-2 px-4 rounded-2xl bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] py-2 px-4 rounded-2xl "
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white rounded-full border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact2;
