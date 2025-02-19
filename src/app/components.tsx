import React from "react";

interface CardProps {
  title: string;
  value: string;
  color: "green" | "red" | "blue";
}

export default function Card({ title, value, color }: CardProps) {
  const borderColor = color === "green" ? "border-green-500" 
                   : color === "red" ? "border-red-500" 
                   : "border-blue-500";

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md border-t-4 ${borderColor}`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}
