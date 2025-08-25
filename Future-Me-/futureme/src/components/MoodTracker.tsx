import React, { useState } from 'react';
import { EmojiHappy, EmojiSad, EmojiNeutral } from 'lucide-react';

const MoodTracker: React.FC = () => {
    const [mood, setMood] = useState<string | null>(null);

    const handleMoodChange = (selectedMood: string) => {
        setMood(selectedMood);
    };

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
            <div className="flex space-x-4">
                <button onClick={() => handleMoodChange('happy')} className={`p-2 rounded-full transition-transform transform ${mood === 'happy' ? 'scale-110' : ''}`}>
                    <EmojiHappy className="h-8 w-8 text-yellow-500" />
                </button>
                <button onClick={() => handleMoodChange('neutral')} className={`p-2 rounded-full transition-transform transform ${mood === 'neutral' ? 'scale-110' : ''}`}>
                    <EmojiNeutral className="h-8 w-8 text-gray-500" />
                </button>
                <button onClick={() => handleMoodChange('sad')} className={`p-2 rounded-full transition-transform transform ${mood === 'sad' ? 'scale-110' : ''}`}>
                    <EmojiSad className="h-8 w-8 text-blue-500" />
                </button>
            </div>
            {mood && (
                <div className="mt-4 text-lg">
                    <p>You are feeling: <span className="font-bold">{mood}</span></p>
                </div>
            )}
        </div>
    );
};

export default MoodTracker;