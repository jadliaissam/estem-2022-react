import React from "react"

class CompA extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        return(
            <div>
                <input ref={this.myRef} />
                <CompB refA={this.myRef}/>
            </div>
        )
    }
}

class CompB extends React.Component {
    handleClick = ()=>{ this.props.refA.current.style.backgroundColor="teal"}
    render(){
        return (
            <div>
            <div>{this.props.value}</div>
            <button onClick={this.handleClick}>Test Ref </button>
            </div>
        )
    }
}
export default CompA;



