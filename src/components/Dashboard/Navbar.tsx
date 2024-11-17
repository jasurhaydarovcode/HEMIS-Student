import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({toggleSidebar}) => {
    return (
        <div className="bg-blue-500 shadow-md p-4 flex justify-between items-center">
            <button onClick={toggleSidebar} className="text-white">
                <GiHamburgerMenu/>
            </button>
            {/*<h1 className="text-lg font-semibold">Dashboard</h1>*/}
            <div className="flex items-center space-x-4">
                <span>User</span>
                <img
                    src="https://via.placeholder.com/30"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </div>
    );
};

export default Navbar;
