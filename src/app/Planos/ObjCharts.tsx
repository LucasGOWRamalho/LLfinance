"use client";
import React from "react";
import Chart from "react-apexcharts";

const ObjCharts: React.FC = () => {
  const monthlyData = [
    { month: "Jan", value: 500, goal: 200 },
    { month: "Fev", value: 850, goal: 800 },
    { month: "Mar", value: 700, goal: 800 },
    { month: "Abr", value: 400, goal: 800 },
    { month: "Mai", value: 1200, goal: 800 },
  ];

  // Função para definir a cor do mês baseado no progresso
  const getColor = (value: number, goal: number) => {
    if (value >= goal * 1.3) return "#007bff"; // Azul → Muito acima da meta
    if (value >= goal) return "#28a745"; // Verde → Dentro da meta
    if (value >= goal * 0.7) return "#ffc107"; // Amarelo → Abaixo da meta
    return "#dc3545"; // Vermelho → Muito abaixo da meta
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
      bar: { horizontal: false, columnWidth: "55%" },
    },
    xaxis: {
      categories: monthlyData.map((item) => item.month),
    },
    fill: {
      colors: monthlyData.map((item) => getColor(item.value, item.goal)),
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
