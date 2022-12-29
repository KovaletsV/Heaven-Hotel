import React from "react";

const Plans = () => {
    return (
        <div className="max-w-[1400] m-auto py-14 px-4 grid gap-4 lg:grid-cols-2">
            {/* Left */}
            <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img
                    className="row-span-3 w-full h-full object-cover p-2"
                    src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
                    alt=""
                />
                <img
                    className="row-span-2 w-full h-full object-cover p-2"
                    src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt=""
                />
                <img
                    className="row-span-2 w-full h-full object-cover p-2"
                    src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                    alt=""
                />
                <img
                    className="row-span-3 w-full h-full object-cover p-2"
                    src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                />
                <img
                    className="row-span-2 w-full h-full object-cover p-2"
                    src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
                    alt=""
                />
            </div>
            {/* Right */}
            <div>
                <h3 className="text-5xl fond-bold md:text-6xl">
                    Plan your next trip
                </h3>
                <p className="py-6 text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, ab?
                </p>
                <p className="pb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nostrum rerum reiciendis consectetur quia nemo.
                    Perspiciatis.
                </p>
                <div>
                    <button className="border-black mr-4 hover:shadow-xl w-[150px] ">
                        Learn More
                    </button>
                    <button className="border-black bg-black text-white hover:shadow-xl w-[150px] ">
                        Book Trip
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Plans;
