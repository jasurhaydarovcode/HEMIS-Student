// Dropdown.tsx
import React from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface DropdownProps {
    title: string;
    isOpen: boolean;
    toggle: () => void;
    children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, isOpen, toggle, children }) => {
    return (
        <div>
            <div
                className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer rounded"
                onClick={toggle}
            >
                <div className="flex items-center">
                    <span>{title}</span>
                </div>
                {isOpen ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            {isOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                    {children}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
