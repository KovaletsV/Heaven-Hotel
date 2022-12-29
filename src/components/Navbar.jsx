import React, { useState } from "react";
import { GiHeavenGate } from "react-icons/gi";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleChange = () => {
        setShowMenu(!showMenu);
        // if (!showMenu) {
        //     document.body.style.overflow = "hidden";
        // }else{
        //     document.body.style.overflow = 'visible';
        // }
    };

    return (
        <div className="absolute flex justify-between items-center w-full p-4">
            <h1 className=" font-bold text-3xl z-20">
                <span className="text-sky-600">Hea</span>
                <span className="text-yellow-500">ven</span>
            </h1>
            <GiHeavenGate
                onClick={handleChange}
                className="hover:scale-150 duration-500 z-20 text-white cursor-pointer"
                size={25}
            />
            <div
                className={
                    showMenu
                        ? " ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 py-7 flex-col z-10"
                        : "absolute top-0 left-[-100%] h-screen ease-in duration-500 z-10"
                }
            >
                <ul className="flex w-full h-full flex-col justify-center items-center">
                    <li className="fond-bold text-3xl p-8">Home</li>
                    <li className="fond-bold text-3xl p-8">Destinations</li>
                    <li className="fond-bold text-3xl p-8">Reservation</li>
                    <li className="fond-bold text-3xl p-8">Amenities</li>
                    <li className="fond-bold text-3xl p-8">Room</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
