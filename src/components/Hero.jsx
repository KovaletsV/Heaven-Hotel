import React from "react";

const Hero = () => {
    return (
        <div className="w-full h-screen">
            <img
                className="top-0 left-0 w-full h-screen object-cover"
                src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
                alt=""
            />
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
            <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-center ">
                <div className="absolute p-4 m-auto max-w-[1100px] md:left-[10%]">
                    <p>All Inclusive</p>
                    <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
                        Private Beaches
                    </h1>
                    <p className="max-w-[600px] drop-shadow-2xl py-2 text-2xl">
                        Heaven are real on the Earth
                    </p>
                    <button className="bg-white  text-black hover:bg-inherit hover:text-white hover:duration-300">
                        Book now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
