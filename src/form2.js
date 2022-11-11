import React from "react";
class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "", cin : ""
        }
    }

    handle_name=(e)=>{
        let name=e.target.value;
        let UpperName=name.toUpperCase()
        this.setState({
            name: UpperName
            
        })
    }
    handle_cin=(e)=>{
        let cin=e.target.value;
        if(cin.length > 8 ){
            this.setState({cin : "cin invalid"})
        }
        else{
            this.setState({cin : cin})
        }
    }
    render(){
        return(
            <form>
                <label>
                    nom:
                </label>
                <input type="text" value={this.state.name} onChange = {this.handle_name} />
                <label>
                    CIN:
                </label>
                <input type="text" value={this.state.cin} onChange =  {this.handle_cin}/>
                <br/>
                <input type="submit" value="submit"/>
                                </form>
                

        )
    }
}
export default Form2;