import React from 'react'
import store from './redux/store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {increamentcount} from './redux/actions/countaction'
import {decreamentcount} from './redux/actions/countaction'

function App() {
    const countval=useSelector((state)=>state.countdata)
    const dispacth=useDispatch()
    const incremnet=()=>{
        // console.log(countval)
        dispacth(increamentcount(countval+1))
    }
    const decrement=()=>{
        // console.log(countval)
        dispacth(decreamentcount(countval+1))
    }
    return (
        <div>
            <h1>You Click no of {countval} times  ram count redux</h1>
            <button title='increment' onClick={incremnet}>+</button>
            <button title='Decrement' onClick={decrement}>-</button>
        </div>
    )
}

export default App
