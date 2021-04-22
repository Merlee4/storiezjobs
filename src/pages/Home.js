import React, { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import JobsList from '../components/JobsList'
function Home() {
    const [recentLink, setRecentLink] = useState("#1d4ed8")
    const [featureLink, setFeatureLink] = useState("gray")
    const router = useHistory()

    const RecentJobs = () => {
        return (
            <div className="mx-auto">
                <JobsList />
            </div>
        )
    }

    
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500">
                <NavBar />
                <Header />
            </div>
            {/* Main */}
            <div className="w-8/12 mx-auto">
                <Card />
                <div className="mt-10 bg-white p-2 rounded-sm">
                    <div className="flex gap-4  border-b mb-4">
                        <h1 className="border rounded py-2 px-3 my-5 font-medium text-blue-700">RECENT JOBS</h1>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <RecentJobs/>
                        </div>
                        <button className="my-4 hover:text-gray-500 transition duration-150" onClick={() => router.push('/jobs')}>See More <b>2+</b></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
