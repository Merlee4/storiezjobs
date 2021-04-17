import React from 'react'

function ButtonWithIcon({ icon, text }) {
    return (
        <div className="flex items-center text-gray-500">
            {icon}
            <p>{text}</p>
        </div>
    )
}

export default ButtonWithIcon
