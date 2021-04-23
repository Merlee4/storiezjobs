import React from 'react'
import JobCard from './JobCard'

function JobsList({jobs}) {
    return (
        <div className="grid grid-cols-2 gap-2 w-10/12 mx-auto ">
            {jobs.map(job =>
                <JobCard
                    key={job._id}
                    id={job._id}
                    name={job.name}
                    image={job.image}
                    title={job.title}
                    location={job.location}
                    duration={job.duration}/>
            )}
        </div>
    )
}

export default JobsList
