'use client'
import React from "react";
import Card from "./components";

export default function Home() {
    return (
      <div className="min-h-screen bg-blue-50 p-6">
        <header className="flex justify-between items-center pb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full">fevereiro</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
</div>
          </div>
        </header>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Receitas" value="R$ 0,00" color="green" />
          <Card title="Despesas" value="R$ 0,00" color="red" />
          <Card title="Cartão de crédito" value="R$ 0,00" color="blue" />
        </div>
  
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Passos</h2>
            <p className="text-gray-500">Organizar sua vida financeira por aqui</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Receitas por categoria</h2>
            <p className="text-gray-500">Opa! Você ainda não possui receitas este mês.</p>
          </div>
        </div>
      </div>
    );
  }