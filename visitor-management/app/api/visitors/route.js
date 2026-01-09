import connectDB from "@/lib/mongodb";
import Visitor from "@/models/Visitor";
import { NextResponse } from "next/server";

// Generate simple unique ID
function generateVisitorId() {
  return "VIS-" + Date.now();
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  const visitor = await Visitor.create({
    ...data,
    visitorId: generateVisitorId(),
  });

  return NextResponse.json(visitor);
}

export async function GET() {
  await connectDB();
  const visitors = await Visitor.find();
  return NextResponse.json(visitors);
}
