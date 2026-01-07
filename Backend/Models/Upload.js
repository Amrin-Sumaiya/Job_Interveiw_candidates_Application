import mongoose from "mongoose";

const uploadHistorySchema = new mongoose.Schema(
  {
    uploaded_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    file_name: {
      type: String,
      required: true
    },

    total_records: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("UploadHistory", uploadHistorySchema);
