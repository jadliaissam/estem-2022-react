import React from 'react'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {username: "", password: ""}
    }

    validate = ()=> {
        if(this.state.username === "admin" && this.state.password === "admin"){
            this.props.fn(true)
        } else {
            this.props.fn(false)
        }
    }
    render(){
        return <div>
            <p>Username</p>
            <input type={"text"} onChange={(e)=> this.setState({username: e.target.value})} value={this.state.username} />
            <p>password</p>
            <input type={"text"} onChange={(e)=> this.setState({password: e.target.value})} value={this.state.password} />
            <p></p>
            <button onClick={this.validate}>Envoyer</button>
        </div>
    }
}

export default Login