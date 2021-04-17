import React from 'react'

function Header() {
    return (
        <div className="flex flex-col text-white p-32 items-start">
            <h1 className="text-3xl font-medium">54,642 Job Listed</h1>
            <small className="mt-1 w-96">Create a free account to find hundreds of jobs & carrer opportunities </small>
            <button className="my-4 py-3 px-5 bg-blue-200 bg-opacity-30 text-sm font-medium rounded hover:bg-opacity-50 transition duration-150 ease-in-out">UPLOAD RESUME</button>
        </div>
    )
}

export default Header
