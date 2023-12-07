import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="grid grid-cols-3 gap-4 place-items-center">
            <div className="p-4 shadow-md rounded-lg border-2 border-black">
                <h2 className="text-xl font-semibold text-blue-500">Card 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className=" p-4 shadow-md rounded-md border-2 border-black">
                <h2 className="text-xl font-semibold text-blue-500">Card 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-4 shadow-md rounded-md border-2 border-black">
                <h2 className="text-xl font-semibold text-blue-500">Card 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Add more cards here */}
        </div>
    );
};

export default Dashboard;
