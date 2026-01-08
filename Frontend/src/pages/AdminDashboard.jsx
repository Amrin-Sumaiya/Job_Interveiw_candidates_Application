import React from 'react'

const AdminDashboard = () => {
 
  const stats = [
    { label: "Total Candidates", value: 120 },
    { label: "Upcoming Interviews", value: 15 },
    { label: "Hired", value: 8 },
    { label: "Rejected", value: 20 },
  ];

  return (
    <>
      <h1 className="text-2xl text-gray-900 font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <p className="text-gray-500">{item.label}</p>
            <h2 className="text-2xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default AdminDashboard
