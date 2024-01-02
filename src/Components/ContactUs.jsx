import React, { useState, useContext } from "react";
import { ContactContext } from "../Context/ContactContext";
import { toast } from "react-toastify";
import { BsFillSendCheckFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

const ContactUs = () => {
  const { isContact, setIsContact } = useContext(ContactContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    toast(` We will reply soon, Sweet Heart`, {
      type: "success"
    });

    // Reset form fields
    setEmail("");
    setName("");
    setContent("");

    setIsContact(false);
  };

  return (
    <div className=" w-full flex justify-center">
      <div
        className={`
       ${
         isContact ? ` top-0` : `-top-full`
       } absolute z-30 mt-[80px] flex w-full md:w-2/5 rounded-md  justify-center items-center bg-slate-900 bg-opacity-80 transition-all duration-700`}
      >
        <div>
          <button
            onClick={() => setIsContact(!isContact)}
            className=" top-0 right-0 absolute m-2 text-red-600"
          >
            <IoCloseCircleOutline size={30} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          action="#"
          className=" relative w-1/2 flex justify-center  text-slate-300 flex-col"
        >
          <h1 className=" text-center mt-3 font-serif font-bold">
            Contact Form{" "}
          </h1>

          <div className=" flex flex-col mt-3 mb-4">
            <label htmlFor="email">Your Email</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email.."
              className=" p-2  bg-transparent border-2 border-t-emerald-900 border-r-cyan-800 border-b-teal-800 border-l-sky-800 rounded-md  text-slate-300 focus:outline-none"
            />
          </div>
          <div className=" flex flex-col  mb-4">
            <label htmlFor="name">Subject</label>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name.."
              className=" p-2  bg-transparent border-2 border-t-emerald-900 border-r-cyan-800 border-b-teal-800 border-l-sky-800 rounded-md  text-slate-300 focus:outline-none"
            />
          </div>

          <div className=" flex flex-col mb-2">
            <label htmlFor="text">Email Content</label>
            <textarea
              required
              name="text"
              id=""
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className=" p-2 bg-transparent border-2 border-t-emerald-900 border-r-cyan-800 border-b-teal-800 border-l-sky-800 rounded-md  text-slate-300 focus:outline-none"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full mx-auto group rounded-full font-serif font-extrabold bg-gradient-to-r  from-color-1 via-color-3 to-color-2   px-4 py-1 my-3 hover:bg-gradient-to-l"
          >
            <span className="mr-2 text-slate-950">Send</span>
            <span className="group-hover:rotate-45 duration-150">
              <BsFillSendCheckFill className=" text-slate-900" size={20} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
