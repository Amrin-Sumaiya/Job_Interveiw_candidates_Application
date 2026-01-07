import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
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

    phone: {
      type: String,
      required: true
    },

    experience_years: {
      type: Number,
      required: true,
      min: 0
    },

    previous_experience: {
      type: Map,
      of: String
      /*
        Example:
        {
          "ABC Institute": "Teacher",
          "XYZ Company": "Developer"
        }
      */
    },

    age: {
      type: Number,
      required: true
    },

    current_status: {
      type: String,
      enum: [
        "applied",
        "interview_scheduled",
        "interview_completed",
        "passed",
        "rejected",
        "second_interview",
        "hired"
      ],
      default: "applied"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Candidate", candidateSchema);
