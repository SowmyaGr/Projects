"use client";
import { useState } from "react";
import VisitorForm from "./components/VisitorForm";
import VisitorList from "./components/VisitorList";

export default function Home() {
  const [visitors, setVisitors] = useState([]);

  const addVisitor = (visitor) => {
    setVisitors([...visitors, visitor]);
  };

  const deleteVisitor = (index) => {
    const updated = visitors.filter((_, i) => i !== index);
    setVisitors(updated);
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Visitor Management System
      </h1>

      <VisitorForm addVisitor={addVisitor} />
      <VisitorList visitors={visitors} deleteVisitor={deleteVisitor} />
    </main>
  );
}
