import React from "react"
import DarkComp from "./DarkComp";
import DarkComp2 from "./DarkComp2";
import { Provider} from 'react-redux'
import { createStore } from "redux";
import rootReducer from "./reducers";
import CounterHook from "./CounterHook";
import NewsListHook from "./NewsListHook";

const store = createStore(rootReducer)

function App() {
  return (
    <NewsListHook  />
  );
}

export default App;
