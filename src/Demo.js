import React from "react";

export default class Demo extends React.Component {
    constructor(props){
       super(props)
       this.state = {
          date : new Date()
       }
    }
    componentDidMount(){
       setInterval(() => {
          this.setState({date : new Date()})
 }, 1000) }
    render(){
       return <p style={{fontSize:60}}>{this.state.date.toISOString()}</p>
 } }