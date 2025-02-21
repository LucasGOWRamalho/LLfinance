import React from "react";
import Objetivos from "./Objetivos";

const goals = [
  { title: "Comprar um carro", total: 30000, saved: 12000, deadline: "2025-12-31" },
  { title: "Reserva de emergência", total: 10000, saved: 10000, deadline: "2024-12-31" },
];

const ObjList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {goals.map((goal, index) => (
        <Objetivos key={index} {...goal} />
      ))}
    </div>
  );
};

export default ObjList;
