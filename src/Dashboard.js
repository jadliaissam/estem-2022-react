import React from "react";
import Login from "./Login";
import NewsFeed from "./NewsFeed";

export default class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isAdmin: false
        }
    }

    changeAdmin = (a) => {
        this.setState({ isAdmin: a})
    }

    render(){
        if(this.state.isAdmin)
            return <NewsFeed/>
        else
            return <Login fn={this.changeAdmin} />
    }
}