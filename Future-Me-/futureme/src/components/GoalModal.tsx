import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Textarea } from '@material-tailwind/react';
import { Plus, CheckCircle2 } from 'lucide-react';

const GoalModal = ({ isOpen, onClose }) => {
    const [goal, setGoal] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setGoal('');
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate goal submission
        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
        }, 1000);
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <div className="bg-white rounded-2xl p-6 shadow-lg glassmorphism">
                    <Dialog.Title className="text-lg font-medium text-gray-900">Set Your Goal</Dialog.Title>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <Textarea
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            placeholder="Enter your goal (max 1500 characters)"
                            maxLength={1500}
                            autoFocus
                            className="resize-none h-32"
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                {isSubmitting ? 'Submitting...' : <CheckCircle2 className="mr-2" />}
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default GoalModal;