"use client";
import { useEffect, useState } from "react";
import VisitorForm from "./components/VisitorForm";
import VisitorList from "./components/VisitorList";

export default function Home() {
  const [visitors, setVisitors] = useState([]);

  const fetchVisitors = async () => {
    const res = await fetch("./api/visitors");
    const responseText = await res.text();
    if(responseText){const data = JSON.parse(responseText);
    setVisitors(data);
  }
    
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  const addVisitor = async (visitor: any) => {
    await fetch("/api/visitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visitor),
    });
    fetchVisitors();
  };

  const deleteVisitor = async (id: any) => {
    await fetch("/api/visitors", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchVisitors();
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
