import React, { useState } from "react";
import ContextHookA from "./ContextHookA";
import ContextHookB from "./ContextHookB";

export const LangugaeContext = React.createContext('fr') 

function App() {
  const [lang, setLang] =  useState('fr')
  return (
    <LangugaeContext.Provider value={{lang, setLang}}>
    <div>
      <button onClick={()=>setLang('fr')}>FR</button>
      <button onClick={()=> setLang('en')}>EN</button>
      <button onClick={()=> setLang('es')}>ES</button>
      <ContextHookA />
      <ContextHookB />
    </div>
    </LangugaeContext.Provider>
  );
}

export default App;
