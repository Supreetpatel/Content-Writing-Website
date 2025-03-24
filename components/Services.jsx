export default function Services() {
  return (
    <section className="px-6 md:px-16 bg-white text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 gap-2">
        Services <span className="text-purple-500">_</span>
      </h1>
      <p className="text-gray-600 mb-8">
        We have an exceptional range of services to help you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="blog-image.jpg"
            alt="Blog Writing"
            class="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Blog Writing</h3>
          <p className="text-gray-600 mb-4">
            Get your blog posts written by experts with detailed research and
            updated information for your blog.
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700">
            Enquire Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="content-design.jpg"
            alt="Content Design"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Content Writing</h3>
          <p className="text-gray-600 mb-4">
            We got you covered for all the content you need to update on all
            your social media, website, and blog posts.
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700">
            Enquire Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="editing.jpg"
            alt="Editing"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Public Relations Services
          </h3>
          <p className="text-gray-600 mb-4">
            We make your documents error-free, with zero misuse of semantics,
            and present your story stylishly.
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700">
            Enquire Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="editing.jpg"
            alt="Editing"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          <p className="text-gray-600 mb-4">
            We make your documents error-free, with zero misuse of semantics,
            and present your story stylishly.
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
