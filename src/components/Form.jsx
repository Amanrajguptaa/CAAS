import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="flex h-auto md:w-1/2">
      <form 
        className="bg-[#a7ff00] w-full p-1 md:p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[12px] md:text-2xl font-bold mb-2 md:mb-6 text-center">Contact Form</h2>

        {/* Name Input */}
        <div className="mb-1 sm:mb-3">
          <label className="block text-[12px] md:text-xs text-gray-700 font-semibold sm:mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-[8px] md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-1 sm:mb-3">
          <label className="block text-[12px] md:text-xs text-gray-700 font-semibold sm:mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-[8px]  md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Input */}
        <div className="mb-1 sm:mb-3">
          <label className="block text-[9px] md:text-xs text-gray-700 font-semibold sm:mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full text-[8px]  md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
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
