import React from 'react';

class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            errormsg:""
        }
    }
    valid(){
if(this.state.username==="")
{
this.setState({errormsg:"enter username"})
}
    }
     submit() {
         if(this.valid())
         {
        console.log(this.state)
         }
    }
    render() {
        return (
            <div>
                <h1>Please login</h1>
                <input type="text" name="Username" 
                onChange={(e)=>{this.setState({username:e.target.value})}}></input><br />
                <br/>
                <span style={{color:'red'}}> {this.state.errormsg}</span>
                <br/>
                <input type="text" name="Pass"
                onChange={(e)=>{this.setState({password:e.target.value})}}></input><br />
                <button onClick={()=>this.submit()}>submit</button><br />
            </div>

        )
    }
}

export default Forms;