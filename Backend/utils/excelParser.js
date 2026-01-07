import XLSX from "xlsx";

/**
 * Parse Excel file and return array of candidates
 * @param {string} filePath - path to Excel file
 * @returns {Array} candidates
 */
export const parseExcelFile = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);

  // Optional: transform previous_experience from string to object
  const formattedData = data.map((row) => {
    let previous_experience = {};
    if (row["Name of Institutes Worked For"]) {
      // Example: "ABC:Teacher;XYZ:Developer"
      const entries = row["Name of Institutes Worked For"].split(";");
      entries.forEach((entry) => {
        const [key, value] = entry.split(":");
        if (key && value) previous_experience[key.trim()] = value.trim();
      });
    }

    return {
      name: row.Name,
      email: row.Email,
      phone: row["Phone Number"],
      experience_years: Number(row["Number of Years of Experience"]),
      previous_experience,
      age: Number(row.Age)
    };
  });

  return formattedData;
};
