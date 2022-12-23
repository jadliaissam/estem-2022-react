import { useContext } from "react"
import { LangugaeContext } from "./App"
import { messages } from "./messages"

export default function ContextHookA(){
    const {lang, setLang} = useContext(LangugaeContext)
    const message = messages[lang]
    return <div style={{backgroundColor: 'lightcyan', height:300}}>
        <h1> Contexte Hook A</h1>
        <p>{message.HELLO}</p>
        <p>{message.GO}</p>
        <button onClick={()=> setLang('en')}>Change To En</button>
    </div>
}