import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const login = async (name, email) => {
        try {
            // Simulate an API call for authentication
            const response = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ name, email });
                }, 1000);
            });
            setUser(response);
        } catch (err) {
            setError('Login failed');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        // Simulate checking for existing user session
        const existingUser = localStorage.getItem('user');
        if (existingUser) {
            setUser(JSON.parse(existingUser));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    return { user, loading, error, login, logout };
};

export default useAuth;