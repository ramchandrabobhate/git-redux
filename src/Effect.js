import React, { useEffect, useState } from 'react'

function Effect() {

    const [count, setcount] = useState(0)

    useEffect(() => {
        document.title = 'you click \${count}\ on this times'
        console.log({count})
    })
    return (
        <div><h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}> click</button>
        </div>
    )
}
export default Effect;