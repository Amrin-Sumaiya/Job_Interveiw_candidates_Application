import Candidate from "../Models/candidate.model.js";
import { parseExcelFile } from "../utils/excelParser.js";
import path from "path";

export const uploadExcelData = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = path.join(process.cwd(), req.file.path);

    const candidates = parseExcelFile(filePath);

    // Save all candidates to DB
    const savedCandidates = await Candidate.insertMany(candidates);

    res.status(200).json({
      message: `${savedCandidates.length} candidates uploaded successfully`,
      data: savedCandidates
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading Excel", error });
  }
};
