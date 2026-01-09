import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  visitorId: {
    type: String,
    unique: true,
  },
  name: String,
  purpose: String,
  date: String,
});

export default mongoose.models.Visitor ||
  mongoose.model("Visitor", VisitorSchema);
