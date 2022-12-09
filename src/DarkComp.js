import React from "react";
import { connect } from "react-redux";

class DarkComp extends React.Component {
  render() {
    const style = this.props.isDark ? styles.dark : styles.light;
    return (
      <div style={style.container}>
        <p>Data Can be accessed Anywhere !</p>
        <p>This is a Test For Redux/Context</p>
        <button
          style={style.btn}
          onClick={() => this.props.dispatch({type: "CHANGE_THEME", isDark: !this.props.isDark })}
        >
          Change Theme
        </button>
      </div>
    );
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

const ConnectedDarkComp = connect(mapStateToProps)(DarkComp)

export default ConnectedDarkComp;
