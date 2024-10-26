"use client";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="ml-28 mb-28 mt-28 mr-28 border-2 border-slate-900 p-4 hidden md:block bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center bg-white text-black">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-xl text-white">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium text-white">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xl font-medium text-white">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white p-2 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black">Submit</button>
        </form>
        {submitted && (
          <p className="text-center text-lg mt-3 font-bold text-white">Success! your message can be sent.</p>
        )}
      </div>

      {/* Mobile View */}
      <div className="w-full max-w-md mx-auto mt-8 mb-12 p-6 border-2 border-slate-900 lg:hidden md:hidden bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center bg-white">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-medium text-white text-lg mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 "
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-white  font-medium mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 "
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-white  font-medium mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2  h-28 resize-none"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-white hover:text-black  transition-colors duration-200">
            Submit
          </button>
        </form>
        {submitted && (
          <p className="text-center mt-4 font-semibold text-white text-lg ">Success! your message can be sent.</p>
        )}
      </div>
       {/* Social Media Links */}
       <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <a href="https://www.facebook.com/muahammad.abubakar.142/" target="_blank" rel="noopener noreferrer">
          <img src="/fb.jpg" alt="Facebook" style={{ width: "50px", height: "50px" }} />
        </a>
        <a href="https://www.instagcmdram.com/muhammadabdullah6156/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.jpg" alt="Instagram" style={{ width: "50px", height: "50px" }} />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-abdullah-608284302/" target="_blank" rel="noopener noreferrer">
          <img src="/linkdin.png" alt="LinkedIn" style={{ width: "50px", height: "50px" }} />
        </a>
        </div>

     
        
      
    </>
  );
}