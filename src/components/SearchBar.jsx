import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {TbCurrentLocation} from "react-icons/tb"
import { Link } from "react-router-dom";

function SearchBar() {
    return (
        <div className="bg-white w-full rounded-xl h-12 flex items-center px-4 shadow-xl">
            <FaSearch className="text-primary text-xl" />
            <input
                placeholder="Type to Search..."
                className="bg-transparent border-none text-xl h-full w-full ml-2.5 focus:outline-none">    
            </input>
            <Link to="/your-location"><TbCurrentLocation className="text-primary text-2xl" /></Link>
        </div>
    );
}

export default SearchBar; 