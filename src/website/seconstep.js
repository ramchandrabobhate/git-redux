import React from 'react'

function seconstep(props) {
    return (
        <div>
            <h2>next to 2</h2>
            <button onClick={props.prvStep} title='next'>back</button>
        </div>
    )
}

export default seconstep
