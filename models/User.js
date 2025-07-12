import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  preferredLanguage: String, // eg: 'hindi', 'english'
preferredGenre: String  
});

export default mongoose.models.User || mongoose.model("User", userSchema);
