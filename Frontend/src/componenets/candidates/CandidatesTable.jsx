import React from 'react'
import { candidates } from '../../data/candidatesData'

const CandidatesTable = () => {
  return (
    <div className='p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Candidates</h2>

        <table className='w-full border'>
            <thread className="bg-gray-100">
                <tr>
                 <th className='border p-2'>Name</th>
                 <th className='border p-2'>Email</th>
                 <th className='border p-2'>Experience</th>
                 <th className='border p-2'>Age</th>   
                </tr>

            </thread>
        </table>
      
    </div>
  )
}

export default CandidatesTable
