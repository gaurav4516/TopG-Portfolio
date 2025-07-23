import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-black">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#5d7e9e]">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/yourFormID" // Replace with your form handling endpoint
          method="POST"
          className="bg-white p-8 rounded-lg shadow-lg space-y-6 border"
        >
          <div>
            <label className="block mb-2 font-semibold text-[#5d7e9e]">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5d7e9e]"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-[#5d7e9e]">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5d7e9e]"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-[#5d7e9e]">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#5d7e9e]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5d7e9e] text-white font-bold py-2 px-6 rounded-md hover:bg-[#4d6e8e] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
