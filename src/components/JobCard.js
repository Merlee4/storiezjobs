import { BriefcaseIcon, ClockIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React, { useEffect } from 'react'

function JobCard({ url, image, title, hire, duration, location, router }) {

    useEffect(() => {
        axios.get('http://localhost:5000/job/:id')
            .then(res => {
                console.log(res)
            })
    })
    return (
        <div className="flex p-2 cursor-pointer hover:shadow-lg rounded transition duration-200" onClick={() => router.push(`/jobs/${url}`)} >
            <div className="mr-2">
                <img src={image} alt="job" className="h-14 w-14 object-cover rounded " />
            </div>
            <div className="justify-start">
                <p className="font-medium">{title}</p>
                <div className="flex justify-between items-center text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                        <BriefcaseIcon className="h-4 ml-1 text-blue-800" />
                        <p>{hire}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LocationMarkerIcon className="h-4 ml-1 text-red-600" />
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClockIcon className="h-4 ml-1 text-pink-800" />
                        <p>{duration}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
