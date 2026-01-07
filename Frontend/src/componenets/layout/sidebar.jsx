import React from 'react'

const sidebar = () => {
  return (
        <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Candidates</li>
        <li className="hover:text-blue-400 cursor-pointer">Interviews</li>
        <li className="hover:text-blue-400 cursor-pointer">Hired</li>
      </ul>
      
    </div>
  )
}

export default sidebar
