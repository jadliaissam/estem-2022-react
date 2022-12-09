import React from "react"
import DarkComp from "./DarkComp";
import DarkComp2 from "./DarkComp2";
import { Provider} from 'react-redux'
import { createStore } from "redux";
import rootReducer from "./reducers";
import CounterHook from "./CounterHook";

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <CounterHook/>
      </div>
    </Provider>
  );
}

export default App;
