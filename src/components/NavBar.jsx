import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLogin } from "./context/LoginContext";

function NavBar() {
    const { isLoggedIn} = useLogin();
    return (
        <nav className="border-b border-gray-300">
            <div className="flex items-center px-10 py-3 justify-between w-[80%] mx-auto h-30 ">
                <div className="flex items-center gap-20">
                    <img src={logo} alt="logo" className="w-1/12 h-auto" />
                    <ul className="flex items-center gap-6 ">
                        <li>
                            <Link to="/" className="text-lg font-light">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop"className="text-lg font-light">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to='/features' className="text-lg font-light">
                                Features
                            </Link>
                        </li>
                        <li>
                            <a href="#" className=" text-lg font-light">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg font-light">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg font-light">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <Search className="w-6 h-6 cursor-pointer" />
                    {isLoggedIn ? (
                        <>
                            <ShoppingCart className="w-6 h-6 cursor-pointer" />
                            <Heart className="w-6 h-6 cursor-pointer" />
                        </>
                    ) : (
                        <>
                            <Link to="/login"> <User className="w-6 h-6 cursor-pointer" /></Link>
                            <Link to="/register" > <button className="text-lg font-light bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300">Register</button></Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
