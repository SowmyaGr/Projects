"use client";
import { useState } from "react";

export default function VisitorForm({ addVisitor }) {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !purpose || !date) return;

    addVisitor({ name, purpose, date });
    setName("");
    setPurpose("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add Visitor</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Visitor Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Purpose"
          className="border p-2 rounded"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add Visitor
      </button>
    </form>
  );
}
