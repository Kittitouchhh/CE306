import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    text: string;
}

const WsButton: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <>
            <button onClick={onClick} className = "p-1 bg-blue-700 text-white ">
                {text}    
            </button>        
        </>
    )
}

export default WsButton;