import React from "react";
import {
  Palette,
  Globe,
  Code,
  Image,
  Briefcase,
  PenTool,
  Layers,
  Search,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description:
        "Creating beautiful, intuitive interfaces that engage users and elevate your brand.",
      Icon: Palette,
    },
    {
      id: 2,
      title: "Web Application",
      description:
        "Building powerful, scalable web applications that solve real business problems.",
      Icon: Globe,
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Developing robust, responsive websites using modern technologies and best practices.",
      Icon: Code,
    },
    {
      id: 4,
      title: "Banner Design",
      description:
        "Crafting eye-catching banners that capture attention and drive engagement.",
      Icon: Image,
    },
    {
      id: 5,
      title: "Branding",
      description:
        "Developing cohesive brand identities that resonate with your target audience.",
      Icon: Briefcase,
    },
    {
      id: 6,
      title: "Icon Design",
      description:
        "Creating unique, meaningful icons that enhance user experience and visual appeal.",
      Icon: PenTool,
    },
    {
      id: 7,
      title: "Graphic Design",
      description:
        "Delivering stunning visuals that communicate your message effectively.",
      Icon: Layers,
    },
    {
      id: 8,
      title: "SEO",
      description:
        "Optimizing your digital presence to improve visibility and attract more visitors.",
      Icon: Search,
    },
  ];

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-green text-3xl font-patrick mt-8">
            Professional Services
          </h2>
          <p className="text-gray-600 mt-4 mb-8 text-lg max-w-2xl mx-auto">
            We deliver exceptional solutions tailored to your needs, combining
            creativity with technical expertise to help your business thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-green rounded-xl shadow-sm p-6 hover:bg-green-200 shadow-md transition-shadow duration-300 group"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <service.Icon
                    className="w-8 h-8 text-blue-600"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {service.title}
              </h3>
              <p className="text-black leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
