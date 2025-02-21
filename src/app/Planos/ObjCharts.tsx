"use client";
import React from "react";
import Chart from "react-apexcharts";
import plot from "./Objetivos";

const ObjCharts: React.FC = () => {
  const monthlyData = [
    { month: "Jan", value: 800, goal: plot },
    { month: "Fev", value: -500, goal: plot },
    { month: "Mar", value: 700, goal: plot },
    { month: "Abr", value: 850, goal: plot },
    { month: "Mai", value: 1200, goal: plot },
  ];

  // Função para definir a cor do mês baseado no progresso
  const getColor = (value: number, goal: number) => {
    if (value >= goal * 1.3) return "#007bff"; // Azul → Muito acima da meta
    else if (value >= goal) return "#28a745"; // Verde → Dentro da meta
    else if (value >= goal * 0.7) return "#ffc107"; // Amarelo → Abaixo da meta
    else return "#dc3545"; // Vermelho → Muito abaixo da meta
  };

  const series = [
    {
      name: "Valor Economizado",
      data: monthlyData.map((item) => item.value),
    },
  ];

  const options: any = {
    chart: { type: "bar", height: 350 },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "55%", distributed: true },
    },
    xaxis: {
      categories: monthlyData.map((item) => item.month),
    },
    fill: {
      colors: monthlyData.map((item) => getColor(item.value, item.goal)), // Plot está vindo sem rasultado, então não está sendo aplicado a cor
    },
    dataLabels: { enabled: false },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Comparação Mensal</h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ObjCharts;
