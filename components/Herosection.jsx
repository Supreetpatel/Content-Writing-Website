import Image from "next/image";

function Herosection() {
  return (
    <div className="min-h-screen bg-white px-8 md:px-16 py-10">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-900">
          UXL <span className="text-black">Content</span>
        </h1>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">Services</li>
          <li className="hover:text-indigo-600 cursor-pointer">Works</li>
          <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contacts</li>
        </ul>
      </nav>
      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-9xl md:text-6xl font-bold text-indigo-950 leading-tight ml-2">
            Content Writing <span className="text-indigo-950">Agency</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We offer comprehensive writing services <br />
            to meet your content needs.
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700">
            Get in touch
          </button>
        </div>

        <div className="relative">
          <div className="absolute -top-5 -left-5 w-16 h-16 bg-yellow-400 rounded-lg"></div>
          <Image
            src="/hero-image.jpg"
            alt="Content Writing"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-5 -right-5 w-10 h-10 bg-indigo-600 rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
          <div className="w-10 h-10 bg-indigo-600 rounded-full"></div>
          <p className="text-gray-700 font-semibold">
            Original content - no plagiarism, ever
          </p>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
          <div className="w-10 h-10 bg-indigo-600 rounded-full"></div>
          <p className="text-gray-700 font-semibold">
            Highest quality writers & editors
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
