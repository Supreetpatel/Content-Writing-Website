"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <span className="text-indigo-700">PIXEL</span>PROSE
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6 text-gray-700 z-0">
          <li>
            <a href="#" className="hover:text-indigo-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-700">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-700">
              Works
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-700">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-700">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 text-center mt-4 text-gray-700 z-0">
          <a href="#" className="hover:text-indigo-700">
            Home
          </a>
          <a href="#" className="hover:text-indigo-700">
            Services
          </a>
          <a href="#" className="hover:text-indigo-700">
            Works
          </a>
          <a href="#" className="hover:text-indigo-700">
            Blog
          </a>
          <a href="#" className="hover:text-indigo-700">
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
}
