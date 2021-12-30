import React from 'react'
import Firstuserdata from './Firstuserdata';
import seconstep from './seconstep'
function Homedata() {

    const [state, setstate] = React.useState({
        firstname: '',
        lastname: '',
        step: 1
    });

    const nextStep = () => {
        const { step } = state
        setstate(
            { step: step + 1 }
        )
    }
    const prvStep = () => {
        const { step } = state
        setstate(
            { step: step - 1 }
        )
    }
    const { step } = state
    switch (step) {
        case 1:
            console.log(step)
            return (
                <Firstuserdata nextStep={nextStep} />
            )
            break;
        case 2:
            console.log(step)
            return (
                
                <seconstep prvStep={prvStep} />
            )
            break;
        case 3:
            return (
                <h1>Second step</h1>
            )
            break;
        default:
            break;
    }

}

export default Homedata
