import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const DropdownLoginLang: React.FC = () => {
    const [ isOpen, setIsOpen ] = useState( false );
    const dropdownRef = useRef<HTMLDivElement>( null );

    const toggleDropdown = () => {
        setIsOpen( !isOpen );
    };

    const handleClickOutside = ( event: MouseEvent ) => {
        if( dropdownRef.current && !dropdownRef.current.contains( event.target as Node ) ) {
            setIsOpen( false );
        }
    };

    useEffect( () => {
        document.addEventListener( "mousedown", handleClickOutside );
        return () => {
            document.removeEventListener( "mousedown", handleClickOutside );
        };
    }, [] );

    const languages = [
        "O‘zbekcha",
        "Ўзбекча",
        "Русский",
        "English",
        "Қарақалпақша",
        "Тоҷикӣ",
        "Қазақча",
        "Türkmençe",
        "Қыргызча",
    ];

    const actions = [
        "Parolni bekor qilish",
        "Diplomni tekshirish",
        "Shartnomani olish",
        "Statistika dashboardi",
    ];

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-7 h-7 bg-gray-200 rounded focus:outline-none"
            >
                <BsThreeDotsVertical/>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                    <ul className="py-1">
                        {languages.map( ( language, index ) => (
                            <li key={index} className="px-4 py-1 hover:bg-gray-200 text-[13px] cursor-pointer">
                                {language}
                            </li>
                        ) )}
                    </ul>
                    <hr className="border-gray-200"/>
                    <ul className="py-1">
                        {actions.map( ( action, index ) => (
                            <li key={index} className="px-4 py-1 hover:bg-gray-200 text-[13px] cursor-pointer">
                                {action}
                            </li>
                        ) )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownLoginLang;
