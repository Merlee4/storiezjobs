 import React from 'react'

function Pages({ match }) {
    const data = match.params
    console.log(match)
    return (
        <div>
            <img src={data.image} alt="the display" />
            <h1>Title:{data.title}</h1>
            <p>Location: {data.location}</p>
        </div>
    )
}

export default Pages
