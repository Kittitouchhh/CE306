import React, {useEffect,useState} from 'react';


export const EmptyDependency: React.FC = () =>{
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');

    useEffect(() => {
        console.log('Empty Dependency Effect: Component mounted')
    }, []) //ใน [] เราจะ nodependent ได้ ถ้าเอาพวก name count มาใส่ได้ เเต่ถ้าไม่ใส่ก็ไม่มีอะไร noDependent
    return(
        <div>
            <h2>No Dependency Array</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)} 
            style={{
                height:'50px',
                width:'50px',
                padding:'10px',
                borderRadius:'5px',
                backgroundColor:'blue',
                border:'none'
                
                }}>Plus</button>
            
            <button onClick={() => count> 0 && setCount(count-1)} 
            style={{
                height:'50px',
                width:'50px',
                padding:'10px',
                borderRadius:'5px',
                backgroundColor:'red',
                border:'none'
                
                }}>Delete</button>
            
            <br />
            <p>Name :{name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}