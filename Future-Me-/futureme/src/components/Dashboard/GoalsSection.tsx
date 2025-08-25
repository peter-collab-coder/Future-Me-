import React from 'react';
import { useGoals } from '../../hooks/useGoals';
import { aiRoadmap } from '../../utils/aiRoadmap';
import { CheckCircle2, Target } from 'lucide-react';

const GoalsSection: React.FC = () => {
    const { goals } = useGoals();

    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="mr-2" />
                Your Goals
            </h2>
            <ul className="space-y-4">
                {goals.map((goal, index) => {
                    const roadmapSteps = aiRoadmap(goal);
                    return (
                        <li key={index} className="p-4 border rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{goal}</h3>
                            <p className="mt-2 text-gray-600">Roadmap Steps:</p>
                            <ul className="list-disc list-inside mt-2">
                                {roadmapSteps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="flex items-center">
                                        <CheckCircle2 className="mr-2 text-green-500" />
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default GoalsSection;