
import { Heart } from "lucide-react";

function ProductCard({
    productImg,
    productName,
    productPrice,
}) {
    return (
        <div className=" w-1/5 h-fit ">
            <img
                src={productImg}
                alt="product"
                className="w-full h-1/2 object-contain mb-3"
            />
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-600">{productName}</p>
                <Heart className="w-6 h-6 cursor-pointer text-gray-500 hover:text-red-500"/>
            </div>
            <p className="font-semibold text-lg text-gray-700">$ {productPrice}</p>
        </div>
    );
}

export default ProductCard;
