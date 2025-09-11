import React from 'react';

interface WelcomeBannerProps {
    title:string;
    // children prop จะถูกรวมอัตโนมัติถ้าใช้ React.FC
    // ถ้าต้องการ type ที่ชัดเจน ต้องระบุเอง คือ childen?: React.ReactNode;
    children?: React.ReactNode;
    //childen ส่งอะไรไปก็ได้ ส่ง html ก็ได้

}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ title, children }) => {
    return(
        <div style={{backgroundColor: 'lightblue', padding: '10px'}}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default WelcomeBanner;