import { useContext } from "react"
import { LangugaeContext } from "./App"
import { messages } from "./messages"

export default function ContextHookB(){
    const {lang, setLang} = useContext(LangugaeContext)
    const message = messages[lang]
    return <div style={{backgroundColor:'lightgray', height:300}}>
        <h1>Context Hook B</h1>
        <p>{message.HELLO}</p>
        <p>{message.GO}</p>
    </div>

}