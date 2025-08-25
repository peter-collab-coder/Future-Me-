import React from 'react';
import { CheckCircle2, Trophy } from 'lucide-react';

const AchievementCard: React.FC<{ title: string; description: string; progress: number; reward: string }> = ({ title, description, progress, reward }) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-2">
                <Trophy className="text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-1" />
                    <span className="text-sm">{progress}% Completed</span>
                </div>
                <span className="text-sm font-bold text-blue-600">{reward}</span>
            </div>
        </div>
    );
};

export default AchievementCard;