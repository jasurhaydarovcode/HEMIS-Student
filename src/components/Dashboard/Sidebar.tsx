import React, { useState } from 'react';
import { FaBook, FaUserGraduate, FaMoneyBill, FaEnvelope, FaCog, FaBookOpen } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const [isFinancialOpen, setIsFinancialOpen] = useState(false);

    return (
        <div
            className={`bg-gray-800 text-white ${
                isOpen ? 'w-64' : 'w-20'
            } h-screen p-4 transition-width duration-300 ease-in-out`}
        >
            <h1 className={`text-xl font-bold mb-6 ${isOpen ? 'block' : 'hidden'}`}>
                HEMIS Student
            </h1>
            <ul className="space-y-4">
                <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded">
                    <FaBook className="mr-2" />
                    <span className={`${isOpen ? 'inline' : 'hidden'}`}>O'quv reja</span>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded">
                    <FaUserGraduate className="mr-2" />
                    <span className={`${isOpen ? 'inline' : 'hidden'}`}>Qayta o'qish</span>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded">
                    <FaUserGraduate className="mr-2" />
                    <span className={`${isOpen ? 'inline' : 'hidden'}`}>Talaba ma'lumoti</span>
                </li>
                <li>
                    <div
                        className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer rounded"
                        onClick={() => setIsFinancialOpen(!isFinancialOpen)}
                    >
                        <div className="flex items-center">
                            <FaMoneyBill className="mr-2" />
                            <span className={`${isOpen ? 'inline' : 'hidden'}`}>Moliya to'lov</span>
                        </div>
                        {isOpen && (isFinancialOpen ? <MdExpandLess /> : <MdExpandMore />)}
                    </div>
                    {isOpen && isFinancialOpen && (
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded">
                                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                                Kontraktlar ro'yxati
                            </li>
                            <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded">
                                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                                Stipendiya hisobi
                            </li>
                        </ul>
                    )}
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded">
                    <FaEnvelope className="mr-2" />
                    <span className={`${isOpen ? 'inline' : 'hidden'}`}>Xabarlar</span>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded">
                    <FaCog className="mr-2" />
                    <span className={`${isOpen ? 'inline' : 'hidden'}`}>Tizim</span>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded">
                    <FaBookOpen className="mr-2" />
                    <span className={`${isOpen ? 'inline' : 'hidden'}`}>Elektron kutubxona</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
