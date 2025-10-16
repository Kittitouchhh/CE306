import { useState, useEffect } from "react";
import { useParams,Link }  from "react-router-dom";

const mockProducts = [
    {id: 1, name:"T-Shirts", description: "Good", price:19.99},
    {id: 2, name:"Jeans", description: "Good", price:39.99},
    {id: 3, name:"Jacket", description: "Good", price:59.99},
]

export default function ProductDetailPage(){
    const { productId } = useParams<{productId: string}>();
    const [productName,setProductName] = useState("")
    const [productDescription,setProductDescriptio] = useState("")
    const [productPrice,setProductPrice] = useState(0)

    useEffect(()=>{ {/* -1 เพราะเป็น index */}
        setProductName(mockProducts[Number(productId)- 1].name);
        setProductDescriptio(mockProducts[Number(productId)- 1].description);
        setProductPrice(mockProducts[Number(productId)- 1].price);
    }, [])

    return(
        <div>
            <h1 className="text-2xl font-bold mb-2">Product Detail</h1>
            <div>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <p>${productPrice.toFixed(2)}</p>
            </div>
            <Link to="/products">
            Back to Product List
            </Link>
        </div>
    )
}