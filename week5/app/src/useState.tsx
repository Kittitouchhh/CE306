import React, {useState} from 'react'

interface CounterProps{
    initialCount: number;
}

export const Counter: React.FC <CounterProps>= ({initialCount = 0}) =>{
    const  [count, setCount] = useState<number>(initialCount);
    const [name, setName] = useState<string>('')

    const increment = () =>{
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () =>{
        if (count > 0){
            setCount(count - 1);
        }
    }
    
    return(
        <div style={{flexDirection: 'column',display:'flex',justifyContent:'center',alignItems:'center',}}>
            <h1>Count: {count}</h1>
            <div style ={{ margin: '5px'}}>
                <h2>Hello {name}</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div style ={{ margin: '10px', gap:'10px'}}>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}