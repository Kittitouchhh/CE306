import React, {useState} from 'react'


// //export const Counter: React.FC <CounterProps>= ({initialCount = 0}) =>{
//     const  [count, setCount] = useState<number>(initialCount);
//     const [name, setName] = useState<string>('')

export const UserForm: React.FC  = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const Submit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Name : ${name}\n Email : ${email}`) 
    }

    const Clear = () => {
        window.location.reload();

    }


    return(
        <div>
            <h2>User Form Exercise - Solution</h2>
            <form onSubmit={Submit}>
                <p>ชื่อ:</p>
                <input placeholder="กรอกชื่อของคุณ" type="text"  value={name} onChange={(e) => setName(e.target.value)} />
                <p>อีเมล:</p>
                <input placeholder="กรอกEmailของคุณ" type="email"  value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <button  disabled={!(name && email)} type='submit' >Submit</button>
                <button onClick={Clear} type='button'>Clear</button>
            </form>

            
            <div>
                <h2>ข้อมูลปัจจุบัน</h2>
                <p>ชื่อ:{name || "ยังไม่ได้กรอก"}</p>
                <p>อีเมล:{email || "ยังไม่ได้กรอก"}</p>
            </div>
        </div>
        
    )

}
