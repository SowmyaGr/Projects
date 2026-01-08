import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  name: String,
  purpose: String,
  date: String,
});

export default mongoose.models.Visitor ||
  mongoose.model("Visitor", VisitorSchema);
