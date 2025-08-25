import React from 'react';
import { Coins, Trophy, Star } from 'lucide-react';

const achievements = [
  { id: 1, title: 'First Goal Achieved', description: 'You completed your first goal!', icon: <Trophy /> },
  { id: 2, title: 'Streak Master', description: 'You have a streak of 7 days!', icon: <Star /> },
  { id: 3, title: 'Coin Collector', description: 'You have collected 100 coins!', icon: <Coins /> },
];

const RewardsSection: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="mr-4 text-green-500">
              {achievement.icon}
            </div>
            <div>
              <h3 className="font-semibold">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsSection;