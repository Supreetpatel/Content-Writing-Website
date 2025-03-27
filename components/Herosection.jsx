import { ShieldCheckIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Navbar from "./Navbar";

function Herosection() {
  return (
    <div className="min-h-screen bg-white px-8 md:px-16 py-10">
      <Navbar />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-yellow-50 rotate-12 rounded-lg"></div>
      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        <div className="text-center md:text-left md:w-1/2 space-y-6 z-0">
          <h1 className="text-9xl md:text-6xl font-bold text-indigo-950 leading-tight whitespace-nowrap font-serif">
            I'M <br />
            SUBHADIP TRIVEDI
          </h1>
          <p className="text-gray-600 text-lg">A Conceptual Content Writer</p>
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
        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-2xl shadow-md w-80">
          <div className="bg-indigo-600 p-3 rounded-xl">
            <ShieldCheckIcon className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-800 font-medium">
            Original content - no plagiarism, ever
          </p>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-2xl shadow-md w-80">
          <div className="bg-indigo-600 p-3 rounded-xl">
            <PencilSquareIcon className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-800 font-medium">
            Highest quality writers & editors
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
