const ContactForm = () => {
  return (
    <section className="py-5 px-6 md:px-16 md:gap-10">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
        Contact Us <span className="text-purple-500">_</span>
      </h1>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="font-semibold text-lg flex items-center">
              Our Office Address
            </h3>
            <p className="text-gray-600">
              Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside
              Goregaon Sports Complex, Malad West, Mumbai, Maharashtra 400064
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg flex items-center">
              General Enquiries
            </h3>
            <p className="text-gray-600">websupport@justdial.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg flex items-center">Call Us</h3>
            <p className="text-gray-600">+91-8888888888</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg flex items-center">
              Our Timing
            </h3>
            <p className="text-gray-600">Mon - Sun : 10:00 AM - 07:00 PM</p>
          </div>
        </div>

        <div className="md:w-1/2 md:ml-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Your Contact No."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
