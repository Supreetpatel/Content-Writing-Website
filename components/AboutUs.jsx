import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            About Me <span className="text-purple-500">_</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We are a team of dedicated professionals based in Malad West,
            Mumbai, Maharashtra, providing top-tier content writing, digital
            marketing, and branding services. Our expertise lies in crafting
            well-researched content, strategic marketing solutions, and engaging
            visual storytelling to help businesses establish a strong online
            presence.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            Welcome to :PixelProse where words transform into impact. We are a
            team of passionate content creators dedicated to crafting compelling
            narratives that resonate, engage, and inspire action. Whether you're
            a startup looking to build your brand voice, an established business
            aiming to dominate search rankings, or an entrepreneur needing
            storytelling that sells, we're here to turn your vision into words
            that work.
          </p>
        </div>
        <div className="relative">
          <img
            src="/mnt/data/Screenshot 2025-03-24 144848.png"
            alt="Content Creation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
