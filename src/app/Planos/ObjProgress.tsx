import React from "react";

interface ObjProgress {
  progress: number;
}

const GoalProgress: React.FC<ObjProgress> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
      <div
        className={`h-3 rounded-full ${progress >= 100 ? "bg-green-500" : "bg-blue-500"}`}
        style={{ width: `${Math.min(progress, 100)}%` }}
      ></div>
    </div>
  );
};

export default GoalProgress;
