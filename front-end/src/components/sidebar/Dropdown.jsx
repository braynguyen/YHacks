import React, { useState, useEffect } from 'react';
import { IoLanguage } from "react-icons/io5";

const Dropdown = ({ options, onSelect }) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
    setIsHovered(true);
    };

    const handleMouseLeave = () => {
    setIsHovered(false);
    };



    return (
        <div className="display inline-flex items-center pt-4">
            <IoLanguage className="align-bottom" />
            <div className="text-xl font-bold text-navy-700 dark:text-white items-center ml-2">
                <select
                    value={selectedOption}
                    onChange={(e) => handleSelect(e.target.value)}
                    className={'text-xl font-bold text-navy-700 dark:text-white items-center justify-between border border-solid border-3 rounded-lg border-gray-900'}
                >
                    {options.map((option, index) => (
                            <option key={index} value={option} className="hover:text-white hover:bg-purple-600 hover:border-gray-300 border-2 rounded-sm p-3"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                                {option}
                            </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Dropdown;
