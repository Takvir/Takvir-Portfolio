import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-slate-900">
      <div className="container-box py-10">
        <h1 className="text-center text-white text-5xl mb-12 font-bold">
          Contact
        </h1>
        <div className="grid lg:grid-cols-2 gap-7">
          <div className="text-white">
            <p className="mb-8">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="flex gap-4 mb-8">
              <FaEnvelope size={30} color="#3498db" />
              <span>Email: takvir.alam@gmail.com</span>
            </div>
            <div className="flex gap-4">
              <FaPhone size={30} color="#3498db" />
              <span>Phone: +880199 270 8084</span>
            </div>
          </div>

          <div>
            <input
              type="text"
              className="block  bg-cyan-950 text-white  w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block  bg-cyan-950 text-white  w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <textarea
              placeholder="Message"
              className="textarea text-white  textarea-lg w-full  bg-cyan-950"
            ></textarea>

<button
                    type="submit"
                    className=" bg-cyan-950 text-center py-2 px-8 rounded  text-white  my-1"
                  >
                    Submit
                  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
