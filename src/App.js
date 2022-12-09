import React from "react"
import DarkComp from "./DarkComp";
import DarkComp2 from "./DarkComp2";
import Dashboard from "./Dashboard";
import CompA from "./RefComp";

function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <DarkComp/>
      <DarkComp2/>
    </div>
  );
}

export default App;
