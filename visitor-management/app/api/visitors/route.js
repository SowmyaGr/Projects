import connectDB from "@/lib/mongodb";
import Visitor from "@/models/Visitor";
import { NextResponse } from "next/server";

// GET all visitors
export async function GET() {
  await connectDB();
  const visitors = await Visitor.find();
  return NextResponse.json(visitors);
}

// POST add visitor
export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const visitor = await Visitor.create(data);
  return NextResponse.json(visitor);
}

// DELETE visitor
export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Visitor.findByIdAndDelete(id);
  return NextResponse.json({ message: "Visitor deleted" });
}
