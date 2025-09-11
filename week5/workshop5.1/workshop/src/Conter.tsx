import React, {useState} from 'react'


export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return(
        <div>
            <h2>Counter Exercise - Solution</h2>
            <h1 style={{color:'blue'}}>Count: {count} </h1>
            <div style={{margin:'0 auto',
            display: 'flex'
            }}>
                <button onClick = {() => setCount(count+1)}style={{
                height:'80px',
                width:'80px',
                padding:'10px',
                borderRadius:'5px',
                backgroundColor:'blue',
                border:'none'
                
                }}>+ เพิ่ม</button>
                <button onClick = {() => count > 0 && setCount(count-1)}style={{
                margin: '0 auto',
                height:'80px',
                width:'80px',
                padding:'10px',
                borderRadius:'5px',
                backgroundColor:'red',
                border:'none'
                
                }}>- ลด</button>
                <button onClick = {() => setCount(count - count)}style={{
                height:'80px',
                width:'80px',
                padding:'10px',
                borderRadius:'5px',
                backgroundColor:'orange',
                border:'none'
                
                }}>Reset</button>
            </div>
        </div>
    )
}