import React from 'react';
import { FaCarSide, FaHome, FaUser } from "react-icons/fa";

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            <div className="w-1/4 rounded-lg bg-pink">
                <ul className="py-4">
                    <li className="flex items-center py-2 px-4">
                        <FaHome className="mr-2" size={20} />
                        <span>Home</span>
                    </li>
                    <li className="flex items-center py-2 px-4">
                        <FaCarSide className="mr-2" size={20} />
                        <span>Vehicles</span>
                    </li>
                    <li className="flex items-center py-2 px-4">
                        <FaUser className="mr-2" size={20} />
                        <span>Profile</span>
                    </li>
                </ul>
            </div>
            <div className="w-3/4">
                <div className="grid grid-cols-1 gap-4 place-items-center">
                    <div className="p-6 shadow-md rounded-lg border-2 border-slate-500 bg-pink">
                        <div className="flex items-center">
                            <FaCarSide size={20} />
                            <h2 className="text-xl font-semibold text-black">Tesla </h2>
                        </div>
                        <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="p-6 shadow-md rounded-md border-2 border-black bg-pink">
                        <div className="flex items-center">
                            <FaCarSide size={20} />
                            <h2 className="text-xl font-semibold text-black">Tesla </h2>
                        </div>
                        <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="p-6 shadow-md rounded-md border-2 border-black bg-pink">
                        <div className="flex items-center">
                            <FaCarSide size={20} />
                            <h2 className="text-xl font-semibold text-black">Tesla </h2>
                        </div>
                        <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* Add more cards here */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
