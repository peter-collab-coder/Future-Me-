import React from 'react';
import { motion } from 'framer-motion';
import { Rocket as RocketIcon } from 'lucide-react';

const Rocket: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <motion.div
            className="flex justify-center items-center cursor-pointer"
            onClick={onClick}
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{ duration: 0.5, yoyo: Infinity }}
        >
            <RocketIcon className="w-24 h-24 text-blue-500" />
            <motion.div
                className="absolute w-2 h-2 bg-gray-300 rounded-full"
                animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
            />
            <motion.div
                className="absolute w-2 h-2 bg-gray-300 rounded-full"
                animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
                transition={{ duration: 0.5, delay: 0.1, repeat: Infinity }}
            />
            <motion.div
                className="absolute w-2 h-2 bg-gray-300 rounded-full"
                animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity }}
            />
        </motion.div>
    );
};

export default Rocket;