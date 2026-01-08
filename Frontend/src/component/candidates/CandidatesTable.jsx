import React from "react";
import { candidates } from "../../data/candidates"; // named import
import { FiEye, FiTrash2 } from "react-icons/fi"; // eye and dustbin icons

const CandidatesTable = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Candidates</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Experience</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Details</th>
            <th className="border p-2">Remove</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((c) => (
            <tr key={c.id}>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.email}</td>
              <td className="border p-2">{c.experience_years} yrs</td>
              <td className="border p-2">{c.status.replace("_", " ")}</td>
              <td className="border p-2 text-center">
                <button className="text-blue-500 hover:text-blue-700">
                  <FiEye size={20} />
                </button>
              </td>
              <td className="border p-2 text-center">
                <button className="text-red-500 hover:text-red-700">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesTable;
