import React from "react";
import WsButton from './wsbutton'

interface ProductCardProps {
    imageUrl : string
    title : string
    description: string
    price: number
    onAddtoCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    title,
    description,
    price,
    onAddtoCart
}) => {
    return (
        <div className="w-[300px] h-[350px] px-6 bg-white text-black rounded-lg shadow-md overflow-hidden flex flex-col ">
            <div className="w-[95%] h-[45%] my-1 overflow-hidden ">
                <img className="w-full h-full  object-cover"
                    src={imageUrl}
                    alt={title}
            
                />
            </div>
            <div className="p-4 flex flex-col flex-1 text-left w-4.8/5 ">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4 flex-1 text-xs">{description}</p>
            <div>
                <p className="text-left text-xl font-semibold mb-4 text-blue-600 ">{price}$</p>
            </div>
                <WsButton text="Add to Cart" onClick={onAddtoCart} />
            </div>
        </div>
    );
};

export default ProductCard;