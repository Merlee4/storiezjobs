import React from 'react'
import JobCard from './JobCard'

function JobsList({ url, image, title, compoany, location, duration }) {
    return (
        <div className="grid grid-cols-2">
            <JobCard image={image} title={title} location={location} duration={duration} />
        </div>
    )
}

export default JobsList
