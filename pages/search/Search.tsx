import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
const Search = () => {
    const searchRef = useRef();
    const searchMenuRef = useRef();
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const [input, setInput] = useState("");
    const navigate = usePathname();
    const handleSearch = (e) => {
        navigate(`/post?search=${input}`);
        e.preventDefault();
    };

    window.addEventListener("click", (e) => {
        if (e.target !== searchMenuRef.current && e.target !== searchRef.current) {
            setIsOpenSearch(false);
        }
    });
    return (
        <div >
            <form onSubmit={handleSearch}
                className="flex justify-between w-[370px] bg-white"
            >
                <input
                    className="
                        p-1
                        w-full
                        "
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name=""
                    id="search"
                />
                <button
                    onClick={handleSearch}
                    className="
                      bg-white
                        p-2
                       px-4
                       
                        "
                >
                    <FiSearch size={20} className="
                        text-black 
                        
                        "/>
                </button>
            </form>
        </div>
    );
};

export default Search;
