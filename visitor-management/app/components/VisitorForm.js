"use client";
import { useState } from "react";

export default function VisitorForm({ addVisitor }) {
  const [form, setForm] = useState({
    name: "",
    purpose: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addVisitor(form);
    setForm({ name: "", purpose: "", date: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add Visitor</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Purpose"
          value={form.purpose}
          onChange={(e) => setForm({ ...form, purpose: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
      </div>

      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
        Add Visitor
      </button>
    </form>
  );
}
