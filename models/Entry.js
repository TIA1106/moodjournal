import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  mood: { type: String, required: true },
  journal: { type: String },
  song: { type: String },
  date: { type: Date, default: Date.now }
});

export default mongoose.models.Entry || mongoose.model("Entry", entrySchema);
