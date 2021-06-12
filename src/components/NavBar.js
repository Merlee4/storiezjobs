import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { ChevronDownIcon } from '@heroicons/react/solid'

import logo from '../resources/logo-white-no-background.svg'
import { XIcon } from '@heroicons/react/outline';
import axios from 'axios';

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem("client")){
            setLoggedIn(!loggedIn)
            setUser(JSON.parse(sessionStorage.getItem("client")))
        }
    }, [])

    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState("Full Time")
    const [description, setDescription] = useState("")
    const [about, setAbout] = useState("")
    const [category, setCategory] = useState("Frontend Web Developer")

    const addJob = () => {
        axios.post('http://localhost:9000/post', {
            duration: duration,
            image: user.image,
            title: title,
            description: description,
            about: about,
            phone: user.phone,
            email: user.email,
            website: user.website
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="flex justify-between items-center text-white p-3">
            {/* LEFT SIDE */}
            <div className="flex items-center">
                <Link to='/' className="flex flex-col mr-4">
                    {/* LOGO */}
                    <div className="flex items-center text-xl ">
                        <img src={logo} alt="logo" className="h-5" />
                        <h2>tories</h2>
                    </div>
                    <p className="text-xs">Jobs Found Easily</p>
                </Link>
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
                    <li className=""><Link to="/">Home</Link></li>
                    <li className="ml-4"><Link to="/jobs">Jobs</Link></li>
                    <li className="ml-4"><Link className="bg-blue-700 text-white py-2 px-4 rounded">Employer</Link></li>
                    <li className="ml-4">
                        <button onClick={() => setModalOpen(true)} className="bg-white text-blue-700 py-2 px-4 rounded">Post a job</button>
                    </li>
                </ul>
                <ul className="flex text-sm font-light">
                    {loggedIn == false && <li className="ml-4"><Link to='/'>Login</Link></li>}
                    {loggedIn == true && <li className="ml-4"><Link to='/profile'>{user.firstname}</Link></li>}
                </ul>
            </div>

            <Modal isOpen={modalOpen}>
            
                
                <div className="flex flex-col">
                    <button className="" onClick={() => setModalOpen(false)}>
                        <XIcon className="h-8"/>
                    </button>

                    <h1 className="text-3xl font-bold mt-4">Add New Job</h1>
                    <div className="flex flex-col mt-4">
                        <label className="text-sm">Title</label>
                        <input type="text" className="border-b-2  focus:border-blue-400"/>
                    </div>

                    <div className="flex flex-col mt-4">
                        <label className="text-sm">About</label>
                        <textarea type="email"className="border-b-2  focus:border-blue-400"></textarea>
                    </div>

                    <div className="flex flex-col mt-4">
                        <label className="text-sm">description</label>
                        <input type="text" className="border-b-2  focus:border-blue-400"/>
                    </div>

                    <select className="border py-2 mt-4 active:border-blue-400" value={category} onChange={(e) => {
                        setCategory(e.target.value)
                        console.log(category)
                    }}>
                            <option value="">Catergory</option>
                            <option value="Web-Design">Web Design</option>
                            <option value="UI/UX">UI/UX</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Frontend Web Developer">Frontend Web Developer</option>
                            <option value="Backend Web Developer">Backend Web Developer</option>
                    </select>

                    <div className="flex flex-col mt-4">
                        <select className="border py-2 mt-4 active:border-blue-400" onChange={(e) => {
                            setDuration(e.target.value)
                            
                            console.log(duration)
                        }}>
                            <option value="">Choose Duration</option>
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>
                            <option value="temporarily">Temporarily</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 my-4 py-2 text-white" onClick={() => addJob()}>Add Job</button>

                </div>
            </Modal>
        </div>
    )
}

export default NavBar
