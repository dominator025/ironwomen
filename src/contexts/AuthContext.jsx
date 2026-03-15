import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        setCurrentUser({ email, uid: Date.now().toString() });
        return Promise.resolve();
    }

    function login(email, password) {
        setCurrentUser({ email, uid: Date.now().toString() });
        return Promise.resolve();
    }

    function logout() {
        setCurrentUser(null);
        return Promise.resolve();
    }

    useEffect(() => {
        // Simulate checking auth status
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
