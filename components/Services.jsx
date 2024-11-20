import React from "react";
import ServiceCard from "../components/ServiceCard";
import { FaDesktop, FaCode, FaLaptopCode, FaFlag } from "react-icons/fa";

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <ServiceCard
        title="Web Design"
        description="A small river named Duden flows by their place and supplies."
        icon={<FaDesktop size={24} />}
      />
      <ServiceCard
        title="Web Application"
        description="A small river named Duden flows by their place and supplies."
        icon={<FaLaptopCode size={24} />}
      />
      <ServiceCard
        title="Web Development"
        description="A small river named Duden flows by their place and supplies."
        icon={<FaCode size={24} />}
      />
      <ServiceCard
        title="Banner Design"
        description="A small river named Duden flows by their place and supplies."
        icon={<FaFlag size={24} />}
      />
    </div>
  );
};

export default Services;
