import React from "react"

class User extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.name} : {this.props.cin}</li>
            </div>
        )
    }
}

export default class FormUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [], name: "", cin: "" }
    }

    addUser = () => {
        const users = this.state.users
        users.push({ name: this.state.name, cin: this.state.cin })
        this.setState({ users: users })
    }

    render() {
        return (
            <div style={{margin:50}}>
                <div>
                    <h1>Liste Users</h1>
                    {this.state.users.map((u, i) => <User key={i} name={u.name} cin={u.cin} />)}
                </div>
                <div>
                    <h2>Ajouter Nouveau Utilisateur</h2>
                    <div>
                        <form>
                            <div style={{marginBottom: 20}}>
                                <label>
                                    Name
                                    <input onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                                </label>
                            </div>
                            <div style={{marginBottom:20}}>
                                <label>
                                    CIN
                                    <input onChange={(e) => this.setState({ cin: e.target.value })} value={this.state.cin} />
                                </label>
                            </div>
                        </form>
                        <button onClick={this.addUser}>Ajouter</button>
                    </div>
                </div>
            </div>
        )
    }
}