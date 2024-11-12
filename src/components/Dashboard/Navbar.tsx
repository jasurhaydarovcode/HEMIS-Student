import React from 'react';
import { FiBell } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full bg-blue-600 p-4 flex justify-between items-center shadow-md">
            <div className="text-white font-semibold">HEMIS Student</div>
            <div className="flex items-center space-x-4">
                <button className="text-white text-lg">
                    O'zbekcha
                </button>
                <button className="text-white text-xl relative">
                    <FiBell />
                    <span className="absolute top-0 right-0 bg-orange-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">1</span>
                </button>
                <div className="flex items-center space-x-2 text-white">
                    <FaUserCircle className="text-2xl" />
                    <span>HAYDAROV J. B.</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
