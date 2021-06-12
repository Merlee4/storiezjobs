import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BriefcaseIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import Modal from 'react-modal'
import axios from 'axios';
import { XIcon } from '@heroicons/react/solid';

Modal.setAppElement(document.getElementById('root'))

function UserProfileMainContent() {
    const [user, setUser] = useState({})

    useEffect(() => {
        if(sessionStorage.getItem("client")){
            setUser(JSON.parse(sessionStorage.getItem("client")))
        }
    },[])

    // firstname: String,
    // lastname: String,
    // title: String,
    // location: String,
    // image: String,
    // job: String,
    // location: String,
    // bio: String,
    // phone: String,
    // email: String,
    // website: String,
    const [editModal, setEditModal] = useState()

    const [newName, setNewName] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newBio, setNewBio] = useState("")
    const [newAbout, setNewAbout] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newProfile, setNewProfile] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newWebsite, setNewWebsite] = useState("")


    const editProfile = () => {
        axios.post('http://localhost:9000', {

        }).then(res => {

        }).catch((err) => {

        }) 
    }
    return (
        <div>
            <div className="">
                <img src={user.image} className="h-28 w-28 object-fill rounded" alt="profile" />
                <h1 className="text-2xl my-2 font-medium text-gray-800">{user.firstname} {user.lastname}</h1>
                <p className="my-2">{user.bio}</p>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <BriefcaseIcon className="h-4" />
                    <p>iSampo</p>
                </div>
                <div className="flex items-center gap-2">
                    <LocationMarkerIcon className="h-4 gap-2" />
                    <p>{user.location}</p>
                </div>
            </div>

            <div>
                <div className="flex gap-2">
                    <button onClick={() => setEditModal(!editModal)} className="py-2 px-4 bg-blue-600 rounded font-medium text-white mt-2">Edit Profile</button>
                </div>
            </div>
            <div className="rounded-lg border py-4 px-8 bg-white text-gray-700 mt-4">
                <h1 className="text-2xl my-4 font-medium">About</h1>
                <p className="">{user.about}</p>

                <p className="py-4 text-xl font-semibold">Posts by {user.firstname} {user.lastname}</p>
                <div className="mx-auto">
                    {/* <JobsList /> */}
                </div>
                <div className="flex justify-between gap-4">
                    <div className="rounded-lg border p-4 my-4 w-full">
                        <p className="text-sm">Contact info</p>
                        <Link className="text-blue-700 hover:underline font-medium">{user.website}</Link>
                        <p className="text-sm my-2">Location </p>
                        <p className="p-2 rounded bg-gray-200">{user.location}</p>
                    </div>
                    <div className="rounded-lg border p-4 my-4 w-full">
                        <p className="text-sm">Email us</p>
                        <Link className="text-blue-700 hover:underline font-medium">{user.email}</Link>
                        <p className="text-sm">Phone </p>
                        <Link className="text-blue-700 hover:underline font-medium">{user.phone}</Link>
                    </div>
                </div>
            </div>
            <Modal isOpen={editModal} className="">
            <button className=" float-right" onClick={() => setEditModal(!editModal)}>
                <XIcon className="h-8"/>
            </button>
            <div className=" ">
                <img src={user.image} className="h-28 w-28 object-fill rounded" alt="profile" />
                <input placeholder="profile picture url" value={user.bio} onChange={(e) => setNewProfile(e.target.value)}/>
                <div className="flex flex-col">
                    <input className="text-2xl my-2 font-medium text-gray-800" onChange={(e) => setNewName(e.target.value)} value={user.firstname + user.lastname}/>
                    <input className="my-2 border-b" value={user.bio} onChange={(e) => setNewBio(e.target.value)} placeholder="bio" />
                </div>
            </div>
        

            <div className="rounded-lg border py-4 px-8 bg-white text-gray-700 mt-4">
                <h1 className="text-2xl my-4 font-medium">About</h1>
                <textarea className="w-full border-b" onChange={(e) => setNewAbout(e.target.value)}>{user.about}</textarea>

                <p className="py-4 text-xl font-semibold">Posts by {user.firstname} {user.lastname}</p>
                <div className="mx-auto">
                    {/* <JobsList /> */}
                </div>
                <div className="flex justify-between gap-4 border p-4 rounded-xl">
                    <div className="rounded-lg border p-4 my-4 w-full">
                        <p className="text-sm">Contact info</p>
                        <input onChange={(e) => setNewWebsite(e.target.value)} className="text-blue-700 font-medium border-b" value={user.website} placeholder="website"/>
                        <p className="text-sm my-2">Location </p>
                        <input className="p-2 rounded bg-gray-200 border-b" onChange={(e) => setNewLocation(e.target.value)} value={user.location} />

                    </div>
                    <div className="rounded-lg border p-4 my-4 w-full">
                        <p className="text-sm">Email us</p>
                        <input className="text-blue-700 font-medium border-b" value={user.email} onChange={(e) => setNewEmail(e.target.value)} />
                        <p className="text-sm">Phone </p>
                        <input className="text-blue-700 hover:underline font-medium border-b" onChange={(e) => setNewPhone(e.target.value)}  value={user.phone} />
                    </div>
                </div>

                <button className="w-full bg-blue-500 text-white font-bold mt-4 rounded-sm py-2 px-1">Edit</button>
            </div>
            </Modal>
        </div >
    )
}

export default UserProfileMainContent
