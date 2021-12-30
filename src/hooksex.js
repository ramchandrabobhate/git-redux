import React,{useState} from 'react'

function Hooksex(){

    const [count,setcount]=useState(0)
    return(
        <div>
            <h1>About as for router</h1>
            <h>Hooks expmle {count}</h>
            <h>Hooks expmle {setcount}</h> 
            <button onClick={()=>setcount(count+1)}>Inchooks</button>
        </div>
    )
}
export default Hooksex;