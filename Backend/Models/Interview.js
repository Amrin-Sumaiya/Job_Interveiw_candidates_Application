import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true
    },

    interview_type: {
      type: String,
      enum: ["first", "second"],
      default: "first"
    },

    scheduled_date: {
      type: Date,
      required: true
    },

    status: {
      type: String,
      enum: ["upcoming", "completed"],
      default: "upcoming"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Interview", interviewSchema);
