export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description:
        "A small river named Duden flows by their place and supplies.",
      icon: "flaticon-3d-design", // Replace with an actual icon
    },
    {
      id: 2,
      title: "Web Application",
      description:
        "A small river named Duden flows by their place and supplies.",
      icon: "flaticon-app-development",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "A small river named Duden flows by their place and supplies.",
      icon: "flaticon-web-programming",
    },
    {
      id: 4,
      title: "Banner Design",
      description:
        "A small river named Duden flows by their place and supplies.",
      icon: "flaticon-branding",
    },
    {
      id: 5,
      title: "Branding",
      description:
        "A small river named Duden flows by their place and supplies.",
      icon: "flaticon-computer",
    },
    {
      id: 6,
      title: "Icon Design",
      description:
        "A small river named Duden flows by their place and supplies.",
      icon: "flaticon-vector",
    },
    {
      id: 7,
      title: "Graphic Design",
      description:
        "A small river named Duden flows by their place and supplies.",
      icon: "flaticon-vector",
    },
    {
      id: 8,
      title: "SEO",
      description:
        "A small river named Duden flows by their place and supplies.",
      icon: "flaticon-zoom",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-lg text-blue-500 font-semibold">
            I am great at
          </span>
          <h2 className="text-3xl font-bold mt-2">
            We do awesome services for our clients
          </h2>
          <p className="text-gray-600 mt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center text-blue-500 mb-4 text-4xl">
                <i className={service.icon}></i>{" "}
                {/* Replace with actual icons */}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
