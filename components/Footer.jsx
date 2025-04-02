import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 text-xl font-semibold">
          <span className="text-black">:Pixel</span>Prose
        </div>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <a href="/" className="hover:underline">
            HOME
          </a>
          <a href="#services" className="hover:underline">
            SERVICES
          </a>
          <a href="#about" className="hover:underline">
            ABOUT ME
          </a>
          <a href="#contact" className="hover:underline">
            CONTACTS
          </a>
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/subhadip-trivedy-181814254?"
            className="hover:text-gray-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/subhadip.raj.2005?igsh=cDQybzJsbDR4ejRw"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-4">
        &copy; Copyrights 2025 - 2026. :PixelProse . All Rights Reserved.
      </div>
    </footer>
  );
}
