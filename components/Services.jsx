export default function Services() {
  const services = [
    {
      title: "Blogs & Articles",
      description:
        "We consider ourselves content marketing fanatics. We specialize in writing articles and blogs that create positive impressions and establish.",
      icon: "",
    },
    {
      title: "Product description",
      description:
        "We offer product description writing services that excellently capture your brand voice and use language that best appeals to your target audience.",
      icon: "",
    },
    {
      title: "Product description",
      description:
        "We offer product description writing services that excellently capture your brand voice and use language that best appeals to your target audience.",
      icon: "",
    },
    {
      title: "Product description",
      description:
        "We offer product description writing services that excellently capture your brand voice and use language that best appeals to your target audience.",
      icon: "",
    },
  ];

  return (
    <section className="px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        Services <span className="text-purple-500">_</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 shadow-md rounded-2xl border border-gray-200 transition-all duration-300 ${
              service.highlight
                ? "shadow-lg scale-105 bg-gray-50"
                : "hover:shadow-lg"
            }`}
          >
            <div className="flex flex-col gap-4">
              <span className="text-3xl bg-purple-100 p-3 rounded-lg">
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <a
                href="#"
                className="text-indigo-600 font-semibold mt-4 inline-block"
              >
                Learn more
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
