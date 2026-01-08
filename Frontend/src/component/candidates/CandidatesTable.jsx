import React from 'react'

const CandidatesTable = () => {
  return (
    <div className='p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Candidates</h2>

        <table className='w-full border'>
            <thead className="bg-gray-100">
                <tr>
                 <th className='border p-2'>Name</th>
                 <th className='border p-2'>Email</th>
                 <th className='border p-2'>Experience</th>
                 <th className='border p-2'>Status</th>
                 <th className='border p-2'>Action</th>              
                </tr>
            </thead>

            <tbody>
                {candidates.map((c) =>(
                    <tr key={c.id}>
                    <td className='border p-2'>{c.name}</td>  
                                  <td className="border p-2">{c.email}</td>
              <td className="border p-2">{c.experience_years} yrs</td>
              <td className="border p-2">{c.status}</td>
              <td className="border p-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  View
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>  

                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default CandidatesTable
