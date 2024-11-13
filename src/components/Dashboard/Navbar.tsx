import React from 'react';
import { FiBell } from 'react-icons/fi';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full bg-blue-600 px-4 flex justify-between items-center shadow-md">
            <div className="text-white font-semibold">HEMIS Student</div>
            <div className="flex gap-3 items-center space-x-4">
                <button className="text-white text-lg">
                    O'zbekcha
                </button>
                <button className="text-white text-xl relative">
                    <FiBell/>
                    <span
                        className="absolute -top-1 -right-2 bg-orange-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">0</span>
                </button>
                <div className="flex items-center gap-3 space-x-2 text-white hover:bg-blue-500 py-3">
                    {/*<FaUserCircle className="text-2xl"/>*/}
                    <img src="https://avatars.githubusercontent.com/u/157284471?v=4" className="w-10 h-10 rounded-full" alt="User"/>
                    <div className="text-sm">
                        <span>HAYDAROV J. B.</span>
                        <div>
                            <span>023-40</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
