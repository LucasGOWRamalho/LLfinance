"use client";
import Next from "react";
import ObjList from "./ObjList";
import ObjAdd from "./ObjAdd";
import ObjCharts from "./ObjCharts";

export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Meus Objetivos Financeiros</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ObjCharts />
        <ObjAdd />
        <ObjList />
      </div>
    </div>
  );
}
