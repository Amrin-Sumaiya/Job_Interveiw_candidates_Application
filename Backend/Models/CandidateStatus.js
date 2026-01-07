import mongoose from "mongoose";

const candidateStatusSchema = new mongoose.Schema(
  {
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true
    },

    status: {
      type: String,
      enum: ["passed", "rejected", "hired"],
      required: true
    },

    remark: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("CandidateStatus", candidateStatusSchema);
