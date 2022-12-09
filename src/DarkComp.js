import React from "react";

class DarkComp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isDark: false
        }
    }
  render() {
    const style = this.state.isDark ? styles.dark : styles.light
    return <div style={style.container}>
        <p>Data Can be accessed Anywhere !</p>
        <p>This is a Test For Redux/Context</p>
        <button style={style.btn} onClick={()=> this.setState({isDark: !this.state.isDark})}>Change Theme</button>
    </div>
  }
}

const styles = {
    dark : {
        container: { 
            backgroundColor: 'black', 
            color: 'white',
            textAlign: 'center', 
            height: '100vh', 
            width: '100%'
        },
        btn: {
            backgroundColor: 'red', 
            color: 'white'
        }
    },
    light : {
        container: { 
            backgroundColor: 'white', 
            color: 'black',
            textAlign: 'center',
            height: '100vh', 
            width: '100%'
        },
        btn: {
            backgroundColor: 'dodgerblue', 
            color: 'white'
        }
    }
}

export default DarkComp;
