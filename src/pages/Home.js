import React, { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
function Home() {
    const [recentLink, setRecentLink] = useState("#1d4ed8")
    const [featureLink, setFeatureLink] = useState("gray")

    const recentJobs = ({ match }) => {
        console.log(match)
        const colorLink = () => {
            setRecentLink('#1d4ed8')
            setFeatureLink('gray')
        }
        if (match.path === '/recent' || match.path === '/') {
            colorLink()
        }
        return (
            <div>
                <h1>Recent</h1>
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
                Feature
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
                <div className="mt-10 mx-auto ">
                    <div className="flex gap-4 justify-center">
                        <Link to='/recent' className="border rounded py-2 px-3 my-5" style={{ color: recentLink }}>RECENT JOB</Link>
                        <Link to='/feature' className="border rounded py-2 px-3 my-5" style={{ color: featureLink }}>FEATURE JOB</Link>
                    </div>

                    <Switch>
                        <Route exact path='/feature' component={featureJobs} />
                        <Route exact path='/recent' component={recentJobs} />
                    </Switch>

                </div>
            </div>

        </div >
    )
}

export default Home
