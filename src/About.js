import React from 'react'

function About(p) {

    const red = () => {
        alert('ram')
    }
    return (
        <div>
            <h1 onClick={red} >{p.text}</h1>
            <h1>{p.data.name}</h1>
            </div>
    )
}
export default About;