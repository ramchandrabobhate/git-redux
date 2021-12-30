import React from 'react'

class Stateex extends React.Component {

    constructor()
    {
        super()
        this.state={
            name:"Brad",
            Emailid:"brad@gmail.com",
            count:0
        }
    }
    changestate()
    {
        this.setState ({
            name:"vvii",
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div><h1>count :{this.state.count}</h1>
            <h1>name :{this.state.Emailid}</h1>
            <button onClick={()=>this.changestate()}>changename</button>
                </div>
        )
    }
}

export default Stateex