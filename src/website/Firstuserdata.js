import React from 'react'

function Firstuserdata(props) {
    return (
        <div>
            <h1>Step 1 </h1>
            <button onClick={props.nextStep} title='next'>Next</button>
        </div>
    )
}

export default Firstuserdata
