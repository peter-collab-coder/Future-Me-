import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Input } from './Icon'; // Assuming you have an Input component styled with Tailwind

const AuthScreen: React.FC = () => {
    const { login } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) {
            setError('Please fill in all fields');
            return;
        }
        login(name, email);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Welcome to FutureMe</h1>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-4 p-2 rounded-lg border border-gray-300"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4 p-2 rounded-lg border border-gray-300"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300"
                    >
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthScreen;