import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  userEmail: String,
  mood: String,
  journal: String,
  song: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Journal || mongoose.model("Journal", journalSchema);
