import React, { useEffect, useState } from 'react';
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;

    
}

const FetchAPI: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                await fetch('http://jsonplaceholder.typicode.com/users/1')
                    .then(response => response.json())
                    .then(data => {
                        setUser(data);
                    })
                    .catch(error => {
                        console.error(`Error fetching data: ${error}`)
                    })
            } catch (error) {
                console.error(`Error fetching data: ${error}`)
            }
        };

        fetchUser();
    },[])

    if (!user) {
    return <div>User not found</div>
    }
    return(
        <div>
            <h1>UserDetails</h1>
            <p><strong>Name:</strong>{user.name}</p>
            <p><strong>Email:</strong>{user.email}</p>
            <p><strong>Phone:</strong>{user.phone}</p>
        </div>
    )
};
export default FetchAPI

