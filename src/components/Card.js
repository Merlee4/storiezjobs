import { DesktopComputerIcon, SearchIcon, PhotographIcon, ServerIcon, DeviceMobileIcon } from '@heroicons/react/outline'
import React from 'react'
import ButtonWithIcon from '../components/ButtonWithIcon'

function Card() {
    const arr = [
        {
            name: 'UI/UX',
            icon: <DesktopComputerIcon className="h-4 ml-2" />,
            path: '/category/ux'
        },
        {
            name: 'Graphic Design',
            icon: <PhotographIcon className="h-4 ml-2" />,
            path: '/category/graphics'
        },
        {
            name: 'Backend Development',
            icon: <ServerIcon className="h-4 ml-2" />,
            path: '/category/backend'
        },
        {
            name: 'Frontend Development',
            icon: <DeviceMobileIcon className="h-4 ml-2" />,
            path: '/category/frontend'
        }
    ]

    const handleSearch = (e) => {
        e.preventDefault()

    }
    return (
        <div className="bg-white rounded-sm shadow -mt-14 px-4 py-8 flex">
            <div className="mx-auto items-center">
                <form className="flex items-center" onSubmit={(e) => handleSearch(e)}>
                    <div className="flex-1">
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
                    </div>
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
                                <ButtonWithIcon icon={item.icon} text={item.name} path={item.path} />
                            )
                        })}

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Card
