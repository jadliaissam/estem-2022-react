import React from "react";
import { connect } from "react-redux";

class DarkComp2 extends React.Component {
    render(){
        const style = this.props.isDark ? styles.dark : styles.light;

        return <div style={style.container}>
            <p>Hello From Dar Comp 2</p>
            <button style={style.btn}>Click ME</button>
        </div>
    }
}

const styles = {
    dark: {
      container: {
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        height: "100vh",
        width: "100%",
      },
      btn: {
        backgroundColor: "red",
        color: "white",
      },
    },
    light: {
      container: {
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
        height: "100vh",
        width: "100%",
      },
      btn: {
        backgroundColor: "dodgerblue",
        color: "white",
      },
    },
  };
  

const mapStateToProps = (state) => {
    return { isDark: state.isDark };
  };
  
  const ConnectedDarkComp2 = connect(mapStateToProps)(DarkComp2)

  export default ConnectedDarkComp2