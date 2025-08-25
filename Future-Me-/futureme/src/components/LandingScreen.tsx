import React from 'react';
import { Rocket } from './Rocket';

const LandingScreen: React.FC = () => {
    const handleRocketClick = () => {
        // Logic to open goal entry modal
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <h1 className="text-4xl font-bold text-white mb-8">Welcome to FutureMe</h1>
            <div className="relative">
                <Rocket onClick={handleRocketClick} />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-lg">
                    Click the rocket to set your goals!
                </div>
            </div>
        </div>
    );
};

export default LandingScreen;