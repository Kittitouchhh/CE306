// import React from 'react';

// กำหนดค่าของ type ของ Props ด้วย interface
interface GreetingProps{
    name:string;
    messageCount?: number; // ? คือ Optional Props
}

// ใช้ Props Type and Component
const Greeting = (props: GreetingProps) =>{
    return(
        <div>
            <h1>สวัสดี, {props.name}!</h1>
            {props.messageCount && <p>you have {props.messageCount} ข้อความใหม่</p>}
        </div>
    );
};

export default Greeting;