import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: string;
}

const AxiosAPI: React.FC = () => {
    const[posts, setPost] = useState<Post[]>([]);
    const[loading,setLoading] = useState<boolean>(true);
    useEffect(()=>{
        const fetchPosts = async () => {
            try{
                setLoading(true);
                const response = await axios.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
                setPost(response.data);
            }catch (error: unknown){
                console.error(`Failed to fetch posts ${error}`);
            }finally{
                setLoading(false);
            }
        };
        fetchPosts();
    },[]);
    if (loading){
        return <p>Loading...</p>;
    }
    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default AxiosAPI