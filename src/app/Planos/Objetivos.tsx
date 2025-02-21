import React from "react";
import ObjProgress from "./ObjProgress";

interface ObjProps {
  title: string;
  total: number;
  saved: number;
  deadline: string;
}

const Objetivos: React.FC<ObjProps> = ({ title, total, saved, deadline }) => {
  const remaining = total - saved;
  const plot = remaining / 12;
  const progress = (saved / total) * 100;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">Meta: R$ {total.toFixed(2)}</p>
      <p className="text-gray-500">Guardado: R$ {saved.toFixed(2)}</p>
      <p className="text-gray-500">Guardar: R$ {plot.toFixed(2)}</p>
      <p className="text-gray-500">Faltam: R$ {remaining.toFixed(2)}</p>
      <p className="text-gray-500">Prazo: {deadline}</p>
      
      <ObjProgress progress={progress} />
    </div>
  );
};

export default Objetivos;
