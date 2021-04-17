import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/solid'

import logo from '../resources/logo-white-no-background.svg'

function NavBar() {
    return (
        <div className="flex justify-between items-center text-white p-3">
            {/* LEFT SIDE */}
            <div className="flex items-center">
                <div className="flex flex-col mr-4">
                    {/* LOGO */}
                    <div className="flex items-center text-xl ">
                        <img src={logo} alt="logo" className="h-5" />
                        <h2>tories</h2>
                    </div>
                    <p className="text-xs">Jobs Found Easily</p>
                </div>
                {/* BROWSE JOBS BUTTON */}
                <div>
                    <button className="flex text-sm items-end">
                        <p>Browse Jobs</p>
                        <ChevronDownIcon className="h-4" />
                    </button>
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="flex">
                <ul className="flex">
                    <li className=""><Link>Home</Link></li>
                    <li className="ml-4"><Link>Jobs</Link></li>
                    <li className="ml-4"><Link>Employer</Link></li>
                    <li className="ml-4"><Link>Pages</Link></li>
                    <li className="ml-4">
                        <Link className="bg-white text-blue-700 py-2 px-4 rounded">Post a job</Link>
                    </li>
                </ul>
                <ul className="flex text-sm font-light">
                    <li className="ml-4"><Link>Login</Link></li>
                    <li className="ml-4"><Link>Registration</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
