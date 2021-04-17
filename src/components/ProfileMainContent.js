import { BriefcaseIcon, LocationMarkerIcon, UserGroupIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PrompModal from './PrompModal'

function ProfileMainContent() {
    const [Apply, setApply] = useState(false)

    const setIsOpen = () => {
        setApply(false)
    }
    return (
        <div>
            <div className="">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1626912000&v=beta&t=d8TvzdxEh-ZthnCjpGmRIgBwvWTZG-NF230xBZ4iZXU" className="h-28 w-28 object-fill" alt="profile" />
                <h1 className="text-2xl my-2 font-medium text-gray-800">Google</h1>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <BriefcaseIcon className="h-4" />
                    <p>Google</p>
                </div>
                <div className="flex items-center gap-2">
                    <LocationMarkerIcon className="h-4 gap-2" />
                    <p>Lusaka, ZM</p>
                </div>
            </div>

            <div>
                <div className="flex gap-2">
                    <button onClick={() => setApply(true)} className="py-2 px-4 bg-blue-600 rounded font-medium text-white mt-2">Apply Now</button>

                    <div className="flex items-center gap-2">
                        <UserGroupIcon className="h-4" />
                        <p>Employees</p>
                        <p className="font-medium">2+</p>
                    </div>
                </div>
                <p className="text-sm text-red-700">not hiring</p>
            </div>
            <div className="rounded-lg border py-4 px-8 bg-white text-gray-700 mt-4">
                <h1 className="text-2xl my-4 font-medium">About</h1>
                <p className="">A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.</p>

                <p className="py-4">Check out our career opportunities</p>
                <div className="flex justify-between gap-4">
                    <div className="rounded-lg border p-4 my-4 w-full">
                        <p className="text-sm">Contact info</p>
                        <Link className="text-blue-700 hover:underline font-medium">google.com</Link>
                        <p className="text-sm my-2">Location </p>
                        <button className="p-2 rounded bg-gray-200">Show on map</button>
                    </div>
                    <div className="rounded-lg border p-4 my-4 w-full">
                        <p className="text-sm">Email us</p>
                        <Link className="text-blue-700 hover:underline font-medium">jobs@google.com</Link>
                        <p className="text-sm">Phone </p>
                        <Link className="text-blue-700 hover:underline font-medium">+260 964487617</Link>
                    </div>
                </div>
            </div>
            <PrompModal isOpen={Apply} setIsOpen={setIsOpen} />
        </div >
    )
}

export default ProfileMainContent
