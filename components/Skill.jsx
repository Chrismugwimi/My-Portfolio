import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = ({ name, percentage }) => {
  return (
    <div className="">
      <h3 className="text-xl font-patrick font-bold mb-4 text-center">
        {name}
      </h3>
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="flex items-center justify-center w-32 h-32 mx-auto mt-8">
          <div style={{ width: "30%", height: "30%" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: "green",
                textColor: "green",
                trailColor: "#d6d6d6",
                strokeWidth: 4,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
