import React from 'react';
import ProgressBar from '../ProgressBar';
import MoodTracker from '../MoodTracker';

const ProgressSection: React.FC = () => {
    const [progressData, setProgressData] = React.useState({
        tasksCompleted: 0,
        totalTasks: 0,
        mood: '😊', // Default mood
    });

    // Example data for demonstration
    React.useEffect(() => {
        // Fetch or calculate progress data here
        setProgressData({
            tasksCompleted: 5,
            totalTasks: 10,
            mood: '😃',
        });
    }, []);

    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Weekly Progress</h2>
            <ProgressBar
                completed={progressData.tasksCompleted}
                total={progressData.totalTasks}
            />
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Mood Tracker</h3>
                <MoodTracker currentMood={progressData.mood} />
            </div>
        </div>
    );
};

export default ProgressSection;