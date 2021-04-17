import React from 'react'
import CompanyProfileCard from './CompanyProfileCard'
import UserProfileCard from './UserProfileCard'

function SideBar() {
    return (
        <div className="flex flex-col  gap-8">
            {/* <UserProfileCard /> */}
            <CompanyProfileCard />
        </div>

    )
}

export default SideBar
