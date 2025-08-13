import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_dl0eso8";
    const templateId = "template_amw54bu";
    const publicKey = "LAyjlYdUC-RdId3X6";

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response);
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <div className="flex w-full min-h-[400px] md:h-auto">
      <form
        ref={form}
        className="bg-[#a7ff00] w-full px-5 py-3 sm:py-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[27px] md:text-2xl font-bold mb-2 md:mb-2 text-center">
          Contact Us
        </h2>

        {/* Name Input */}
        <div className="mb-5 sm:mb-3">
          <label
            className="block text-[20px] md:text-xl text-gray-700 font-semibold sm:mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-[12px] md:text-[10px] p-3 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mt-2"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-5 sm:mb-3">
          <label
            className="block text-[20px] md:text-xl text-gray-700 font-semibold sm:mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-[10px] md:text-[10px] p-3 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mt-2"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Input */}
        <div className="mb-5 sm:mb-3">
          <label
            className="block text-[20px] md:text-xl text-gray-700 font-semibold sm:mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full text-[10px] p-3 md:text-[10px] md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mt-2"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-xs bg-blue-500 text-white font-bold py-1 md:py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
