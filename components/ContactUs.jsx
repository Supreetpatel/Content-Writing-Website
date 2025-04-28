"use client";
import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error Sending Message.");
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact" className="py-5 px-6 md:px-16 md:gap-10">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
        Contact Us <span className="text-indigo-600">_</span>
      </h1>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="font-semibold text-lg flex items-center">
              Our Office Address
            </h3>
            <p className="text-gray-600">
              North Bazaar,Thana road,Extension Colony,
              <br />
              Paschim Burdwan,West Bengal , Pin-713321.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg flex items-center">
              General Enquiries
            </h3>
            <p className="text-gray-600">subhadip.raj.2005@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg flex items-center">Call Us</h3>
            <p className="text-gray-600">+91-9134585497</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg flex items-center">
              Our Timing
            </h3>
            <p className="text-gray-600">Mon - Sun : 10:00 AM - 07:00 PM</p>
          </div>
        </div>

        <div className="md:w-1/2 md:ml-auto mt-5">
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="number"
              placeholder="Your Contact No."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows={4}
            />
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
