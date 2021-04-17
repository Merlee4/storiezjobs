import React from 'react'
import { Link } from 'react-router-dom'

function ButtonWithIcon({ icon, text, path }) {
    return (
        <Link to={path} className="flex items-center text-gray-500">
            {icon}
            <p className="ml-2">{text}</p>
        </Link>
    )
}

export default ButtonWithIcon
