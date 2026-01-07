import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
      
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["admin", "staff", "candidate"],
      default: "candidate"
    },

    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      default: null
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
