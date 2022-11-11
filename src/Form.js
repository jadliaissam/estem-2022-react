import React from 'react'
export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            name: "Default Name"
        }
    }

    render(){
        return (
            <div>
                <form>
                    <label>Nom : </label>
                    <input type="text" value={this.state.name} onChange={(e)=> {
                        this.setState({name: e.target.value.toUpperCase()})
                    }}/>
                    {this.state.name.length < 4 &&<span style={{color: 'red'}}>Invalid Text</span>}
                </form>
            </div>
        )
    }


}