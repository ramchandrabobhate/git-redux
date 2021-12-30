
import React, { useState } from 'react'

function Emp() {

    // const [name, SetName] = useState({firstname:'',lastname:''})
    const [items, setItem] = useState([])
    const addItem = () => {
        setItem({
            ...items,
            id: items.length,
            value: 10+ 1

        })
    }
    // const inct = () => {
    //     setCount(prv=>prv+1)
    // }
    return (
        <div>
            {/* <button  onClick={()=>setCount(count+1)}>click</button> */}
            {/* <button onClick={inct}>add</button> */}
            {/* <h1>fistname {name.firstname} lastname {name.lastname}</h1> */}
            {/* <input type="text" name="firstname" onChange={(event)=>SetName({...name,firstname:event.target.value})}></input>
            <input type="text" name="lastname"  onChange={(event)=>SetName({...name,lastname:event.target.value})}></input> */}
        <button onClick={addItem}>what</button>
        <ul>
             {items.map(item=>(
            <li key={item.id} > {item.value}</li>
        ))}

        </ul>
        </div>

    )

}
export default Emp;