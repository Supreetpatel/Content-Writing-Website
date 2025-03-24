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
            From blog writing and content design to photography and public
            relations, we offer comprehensive solutions that enhance brand
            visibility and customer engagement. Our commitment to quality and
            client satisfaction has enabled us to build lasting relationships
            and continuously expand our network.
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
