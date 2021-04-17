import { ClockIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React, { useEffect } from 'react'

function JobCard({ url, image, title, company, duration, location, router }) {

    useEffect(() => {
        axios.get('http://localhost:5000/job/:id')
            .then(res => {
                console.log(res)
            })
    })
    return (
        <div className="flex p-2 cursor-pointer" onClick={() => router.push(`/jobs/${url}`)} >
            <div className="mr-2">
                <img src={image} alt="job" className="h-14 w-14 object-cover rounded " />
            </div>
            <div className="justify-start">
                <p className="font-medium">{title}</p>
                <div className="flex justify-between items-center text-sm text-gray-700">
                    <p>{company}</p>
                    <div className="flex items-center mr-2">
                        <p>{location}</p>
                        <LocationMarkerIcon className="h-4 ml-1 text-red-600" />
                    </div>
                    <div className="flex items-center">
                        <p>{duration}</p>
                        <ClockIcon className="h-4 ml-1 text-pink-800" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
