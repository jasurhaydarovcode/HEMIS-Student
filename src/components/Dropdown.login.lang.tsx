// DropdownLoginLang.tsx
import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

interface DropdownLoginLangProps {
    setLanguage: (lang: string) => void;
}

const DropdownLoginLang: React.FC<DropdownLoginLangProps> = ({ setLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const languages = ["O‘zbekcha", "English"];

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-7 h-7 bg-gray-200 rounded focus:outline-none"
            >
                <BsThreeDotsVertical />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                    <ul className="py-1">
                        {languages.map((language, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setLanguage(language);
                                    setIsOpen(false);
                                }}
                                className="px-4 py-1 hover:bg-gray-200 text-[13px] cursor-pointer"
                            >
                                {language}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownLoginLang;
