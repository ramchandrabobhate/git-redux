import React from 'react'

function Formdata() {
    const [inputs, setInputs] = React.useState({});
    const handlechanges = (event) => {
        // setInput
        
        const name=event.target.name
        const value=event.target.value
        // console.log([name]:value)
         setInputs(values=>({...values,[name]:value}))
         console.log(inputs)
    }
    const submitdata = (e) => {
        e.preventDefault();
        console.log(inputs)
    }
    return (
        <div>
            <form onSubmit={submitdata}>
                <h1>User input</h1>
                <input type="text" name="username" onChange={handlechanges} ></input>
                <input type="number" name="age" onChange={handlechanges} ></input>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Formdata
