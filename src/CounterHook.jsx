import {useState} from 'react'

function CounterHook(){
    const [count, setCount] = useState(0)
    const [isDark, setIsDark] = useState(false)
    return <div>
        <p>Counter : { count }</p>
        <button onClick={()=>setCount(count +1)}>Increment</button>
    </div>
}

export default CounterHook;