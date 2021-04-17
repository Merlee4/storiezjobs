import { DesktopComputerIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import ButtonWithIcon from '../components/ButtonWithIcon'

function Card() {
    const arr = [0, 1, 4, 64]

    const handleSearch = (e) => {
        e.preventDefault()

    }
    return (
        <div className="bg-white rounded-sm shadow -mt-14 p-5">
            <div className="mx-auto">
                <form className="flex" onSubmit={(e) => handleSearch(e)}>
                    <input type="text" placeholder="Enter Keywords" className="border-b mr-2" />
                    <input type="text" placeholder="Location" className="border-b mr-2" />
                    <select className="text-gray-400 border-b mr-4">
                        <option>Catergory</option>
                        <option>UI/UX</option>
                        <option>Graphic Design</option>
                        <option>Web Design</option>
                        <option>Frontend Web Developer</option>
                        <option>Backend Web Developer</option>
                    </select>
                    <button className="text-white flex items-center rounded-sm bg-blue-600 py-2 px-4">
                        <SearchIcon className="h-4 mr-2 " />
                        <p>Search Job</p>
                    </button>
                </form>
                <div className="mt-4">
                    <h3 className="my-4">JOB CATERGORY</h3>
                    <div className="grid grid-cols-4 gap-2 w-full">
                        {arr.map(item => {
                            return (
                                <ButtonWithIcon icon={<DesktopComputerIcon className="h-4 ml-2" />} text="Design & creativity" />
                            )
                        })}

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Card
