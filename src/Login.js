import React from 'react'
import NewsFeed from './NewsFeed'

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {username: "", password: "", isAdmin:false}
    }

    validate = ()=> {
        if(this.state.username === "admin" && this.state.password === "admin"){
            this.setState({isAdmin: true})
        }
    }
    render(){
        if(this.state.isAdmin){
            return <NewsFeed />
        }
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