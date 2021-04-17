import React from 'react'
import JobsList from './JobsList'

function ProfileMainContent() {
    return (
        <div className="rounded border p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-medium text-gray-800 mb-10">All Jobs</h1>
                <p>20 jobs</p>
            </div>
            <JobsList />
        </div>

    )
}

export default ProfileMainContent
