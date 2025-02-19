"use client";
import React, { useState } from "react";

const ObjAdd: React.FC = () => {
  const [title, setTitle] = useState("");
  const [total, setTotal] = useState("");
  const [saved, setSaved] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, total, saved, deadline });
    setTitle("");
    setTotal("");
    setSaved("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md border">
      <h2 className="text-lg font-semibold">Adicionar Objetivo</h2>
      
      <input
        type="text"
        placeholder="Nome do objetivo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded mt-2"
        required
      />

      <input
        type="number"
        placeholder="Valor total"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        className="w-full border p-2 rounded mt-2"
        required
      />

      <input
        type="number"
        placeholder="Valor guardado"
        value={saved}
        onChange={(e) => setSaved(e.target.value)}
        className="w-full border p-2 rounded mt-2"
        required
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full border p-2 rounded mt-2"
        required
      />

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
        Adicionar
      </button>
    </form>
  );
};

export default ObjAdd;
