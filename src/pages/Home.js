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

    const recentJobs = ({ match }) => {
        console.log(match)
        const colorLink = () => {
            setRecentLink('#1d4ed8')
            setFeatureLink('gray')
        }
        if (match.path === '/home' || match.path === '/') {
            colorLink()
        }
        return (
            <div className="mx-auto">
                <JobsList />
            </div>
        )
    }

    const featureJobs = ({ match }) => {
        console.log(match)
        const colorLink = () => {
            setFeatureLink('#1d4ed8')
            setRecentLink('gray')
        }
        if (match.path === '/feature') {
            colorLink()
        }
        return (
            <div>
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
                        <Link to='/recent' className="border rounded py-2 px-3 my-5 font-medium" style={{ color: recentLink }}>RECENT JOB</Link>
                        <Link to='/feature' className="border rounded py-2 px-3 my-5 font-medium" style={{ color: featureLink }}>FEATURE JOB</Link>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <Switch exact path="/recent" >
                                <Route exact path='/recent' component={recentJobs} />
                                <Route exact path='/feature' component={featureJobs} />
                            </Switch>
                        </div>
                        <button className="my-4 hover:text-gray-500 transition duration-150" onClick={() => router.push('/jobs')}>See More <b>2+</b></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
