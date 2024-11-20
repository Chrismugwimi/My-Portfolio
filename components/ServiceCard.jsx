import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaCode, FaLaptopCode, FaFlag } from "react-icons/fa";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="relative w-full max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-center p-6">
        <motion.div
          className="bg-gray-200 rounded-full p-4 mr-4 transition-all duration-300"
          whileHover={{
            x: 8,
            backgroundColor: "#e5e7eb",
          }}
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
