import React from "react";

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: this.props.cn,
            size: this.props.sz
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1, size : this.state.size+5})
    }
    render(){
        return(
            <div>
            <p style={{fontSize : this.state.size}}>
                {this.state.count}
                </p>
                <button onClick={this.increment}>
                    increment
                </button>
            </div>
        )
    }
} 