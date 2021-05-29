import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import AllJobsMainContent from '../components/AllJobsMainContent'

function AllJobs({ match }) {
    console.log(match)
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500 shadow fixed top-0 left-0 right-0 w-full">
                <NavBar />
            </div>
            {/* Main */}
            <div className="grid grid-cols-5 h-screen mt-16">
                <div className="bg-white p-4">
                    <SideBar />
                </div>
                <div className="col-span-4 bg-white p-4">
                    <AllJobsMainContent />
                </div>
            </div>
        </div >
    )
}

export default AllJobs
