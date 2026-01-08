import React from 'react'

const StatusBadge = ({ status }) => {
  const colors = {
    applied: "bg-gray-400",
    interview_scheduled: "bg-yellow-400",
    passed: "bg-green-500",
    rejected: "bg-red-500",
    hired: "bg-blue-600"
  };

  return (
    <span className={`text-white px-2 py-1 rounded ${colors[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge
