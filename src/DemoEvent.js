import React from "react";

export default class DemoEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={couleur:"green", hide:false}
    }
render(){
    return(
        <div>
            {this.state.hide ? null: <h1 style={{color:this.state.couleur}}>DemoEvent</h1>}
            <button onClick={()=>alert(new Date())}>
                Click Me
            </button>
            <button onMouseOver={()=> this.setState({couleur:"red"})}>
                 Changer couleur
            </button>
            <button onClick={()=>this.setState({hide:!this.state.hide})}>
                Toggle
            </button>
        </div>
    );
}


}