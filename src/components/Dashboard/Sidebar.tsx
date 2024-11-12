import React, { useState } from 'react';
import { FiBookOpen, FiChevronDown, FiFileText, FiUser, FiDollarSign, FiMail, FiSettings, FiBook } from 'react-icons/fi';

const Sidebar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white pt-16">
            <ul className="space-y-4">
                <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                    <FiBookOpen className="mr-3" />
                    <span>O'quv reja</span>
                </li>
                <li>
                    <div
                        className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleDropdown('reExam')}
                    >
                        <FiFileText className="mr-3" />
                        <span>Qayta o'qish</span>
                        <FiChevronDown className={`ml-auto transform ${openDropdown === 'reExam' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'reExam' && (
                        <ul className="pl-10 space-y-2 text-sm">
                            <li className="hover:bg-gray-700 p-2 cursor-pointer">Ariza qayta o'qish</li>
                            <li className="hover:bg-gray-700 p-2 cursor-pointer">Q.O'qish mashg'ulotlari</li>
                            <li className="hover:bg-gray-700 p-2 cursor-pointer">Q.O'qish nazorat jadvali</li>
                            <li className="hover:bg-gray-700 p-2 cursor-pointer">Q.O'qish o'zlashtirish</li>
                        </ul>
                    )}
                </li>
                <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                    <FiUser className="mr-3" />
                    <span>Talaba ma'lumoti</span>
                </li>
                <li>
                    <div
                        className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleDropdown('payment')}
                    >
                        <FiDollarSign className="mr-3" />
                        <span>Moliyaviy to'lov</span>
                        <FiChevronDown className={`ml-auto transform ${openDropdown === 'payment' ? 'rotate-180' : ''}`} />
                    </div>
                    {openDropdown === 'payment' && (
                        <ul className="pl-10 space-y-2 text-sm">
                            <li className="hover:bg-gray-700 p-2 cursor-pointer">To'lov ma'lumotlari</li>
                        </ul>
                    )}
                </li>
                <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                    <FiMail className="mr-3" />
                    <span>Xabarlar</span>
                </li>
                <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                    <FiSettings className="mr-3" />
                    <span>Tizim</span>
                </li>
                <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                    <FiBook className="mr-3" />
                    <span>Elektron kutubxona</span>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
