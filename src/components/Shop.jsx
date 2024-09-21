import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from 'axios';

function Shop() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                setProducts(response.data);
                setFilteredProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching products: ' + error.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const filterProducts = (category) => {
        const filtered = products.filter(product => product.category.name === category);
        setFilteredProducts(filtered);
    };

    const showAllProducts = () => {
        setFilteredProducts(products);
    };

    return (
        <>
        <div className="w-[90%] mx-auto pl-20  ">
        <div className="flex items-center gap-10 w-[100%] mx-auto py-10 ">
                <h3> <a href="#" className="underline inline-block" onClick={showAllProducts}> All products</a></h3>
                <ul className="flex items-center gap-4 ">
                    <li><button className="text-md font-light text-gray-500 hover:underline capitalize" onClick={() => filterProducts('Clothes')}>women</button></li>
                    <li><button className="text-md font-light text-gray-500 hover:underline capitalize" onClick={() => filterProducts('Clothes')}>men</button></li>
                    <li><button className="text-md font-light text-gray-500 hover:underline capitalize" onClick={() => filterProducts('Furniture')}>bag</button></li>
                    <li><button className="text-md font-light text-gray-500 hover:underline capitalize" onClick={() => filterProducts('Shoes')}>shoes</button></li>
                    <li><button className="text-md font-light text-gray-500 hover:underline capitalize" onClick={() => filterProducts('Electronics')}>watches</button></li>
                </ul>
            </div>
            <div className="flex flex-wrap gap-10 w-[100%]">
                {filteredProducts.slice(0, 20).map(product => (
                    <ProductCard
                        key={product.id}
                        productImg={product.images[0]}
                        productName={product.title}
                        productPrice={product.price}
                    />
                ))}
            </div>
        </div>
           
        </>
    );
}

export default Shop;
