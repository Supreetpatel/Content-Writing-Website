export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 bg-white text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 gap-2">
        Services <span className="text-indigo-600">_</span>
      </h1>
      <p className="text-gray-600 mb-8">
        We have an exceptional range of services to help you.
      </p>
      <div className="mt-6 flex min-h-[50vh] flex-col items-center justify-center py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="blog.jpg"
              alt="Blog Writing"
              class="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Blog Writing</h3>
            <p className="text-gray-600 mb-4">
              Get your blog posts written by experts with detailed research and
              updated information for your blog.
            </p>
            <a href="#contact">
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 cursor-pointer">
                Enquire Now
              </button>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="cc.png"
              alt="Content Design"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Content Writing</h3>
            <p className="text-gray-600 mb-4">
              I got you covered for all the content you need to update on all
              your website, and blog posts.
            </p>
            <a href="#contact">
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 cursor-pointer">
                Enquire Now
              </button>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="pr.webp"
              alt="public relations"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Public Relations Services
            </h3>
            <p className="text-gray-600 mb-4">
              I provide PR content services and social media content to enhance
              brand image .
            </p>
            <a href="#contact">
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 cursor-pointer">
                Enquire Now
              </button>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="dm.jpg"
              alt="digital marketing"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              I create engaging content for digital marketing, boosting brand
              visibility through social media.
            </p>
            <a href="#contact">
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 cursor-pointer">
                Enquire Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
