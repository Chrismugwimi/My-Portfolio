import React from "react";
import Image from "next/image";
import { Music, Briefcase, Film, Trophy } from "lucide-react";

const AboutMe = () => {
  const interests = [
    { icon: <Music className="w-6 h-6" />, text: "Music" },
    { icon: <Briefcase className="w-6 h-6" />, text: "Travelling" },
    { icon: <Film className="w-6 h-6" />, text: "Technology" },
    { icon: <Trophy className="w-6 h-6" />, text: "Sports" },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center px-4">
            <div>
              <h2 className="text-3xl font-patrick text-green mt-8 text-center">
                About Me
              </h2>
              <br />
              <div className="text-white mb-8 font-patrick">
                <p>
                  I am good in Frontend Development, having interracted with
                  React.js and Next.js.
                </p>{" "}
                <br />
                <p>
                  Additionally, I have completed several data science projects,
                  showcasing my proficiency in analyzing and interpreting
                  complex datasets. I am also skilled in computer
                  troubleshooting and networking.
                </p>
              </div>
              {/* Image Section */}
              <div className="w-full relative">
                <div className="relative">
                  <div className="absolute inset-0 z-10"></div>
                  <Image
                    src="/Chris.jpeg"
                    alt="Profile"
                    className="object-cover"
                    width={550}
                    height={550}
                  />
                </div>
              </div>

              <div className="space-y-4 mb-8 mt-8">
                {[
                  ["Location:", "Nyeri, Kenya"],
                  ["Email:", " chrismugwimi01@gmail.com"],
                  ["Phone:", " +254-757-961-791"],
                ].map(([label, value]) => (
                  <div key={label} className="flex">
                    <span className="w-32 font-patrick text-green mr-4">
                      {label}
                    </span>
                    <span className="text-white font-patrick">{value}</span>
                  </div>
                ))}
              </div>

              {/* Interests Section */}
              <div className="mx-auto">
                <h3 className="text-3xl font-patrick text-green text-center">
                  My Interests
                </h3>
                <br />
                <div className="flex flex-wrap gap-8">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-green">
                        {interest.icon}
                      </div>

                      <span className="font-patrick">{interest.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
