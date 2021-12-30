import React from 'react';

class Prvstate extends React.Component {

    constructor() {
        super()
        this.state = {
            message: "wellcome ram",
            count:0
        }
    }

    Login() {
//         this.setState({
//             message: "Login Succesfully",
//             count:this.state.count+1
            
//         },
//         ()=>{
//             console.log('cb' ,this.state.count)
//         })
// console.log('ram')
//     }
this.setState((prvst)=>({
count:prvst.count+1
}))
console.log('ram')
    }
    render() {

        return (

            <div>
                <h1>Hi {this.state.message} and count is {this.state.count}</h1>
                <button onClick={() => this.Login()}>LogIn</button>
                <button>CountInc</button>
            </div>
        )
    }
}
export default Prvstate;