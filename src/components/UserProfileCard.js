import { BriefcaseIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import React from 'react'
import { useHistory } from 'react-router-dom'


function UserProfileCard() {
    const router = useHistory()
    return (
        <div className=" rounded-md border border-gray-300 p-4 flex flex-col items-center text-center hover:shadow-sm cursor-pointer" onClick={() => router.push('/u/melree4t')}>
            <div>
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFAKUjQ8zIsFA/profile-displayphoto-shrink_800_800/0/1611671601557?e=1623888000&v=beta&t=Ag0Qlq6NT7nTOfpMSb4m3-HEZQDBGZCyPPXqKTNPHAM' className="rounded-lg h-40 w-full mb-4 object-cover" alt="profile" />
                <h1 className="text-2xl font-medium text-gray-700">Mwelwa Nkuta</h1>
                <p className="text-sm mb-4">Aspiring Software Engineer (Express.js/React.js/Javscript)</p>
            </div>
            <div className="my-2">
                <div className="flex gap-4 items-center">
                    <BriefcaseIcon className="h-4 " />
                    <p>iSampo</p>
                </div>
                <div className="flex gap-4 items-center">
                    <LocationMarkerIcon className="h-4 " />
                    <p>Mbala, ZM</p>
                </div>
            </div>

            <button className="py-2 px-4 text-sm bg-gray-200 rounded w-full font-medium text-gray-600">My Profile</button>
        </div >
    )
}

export default UserProfileCard
