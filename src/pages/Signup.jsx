import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Coins, Lock, Mail, ArrowRight, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            // Optional: Add the user's name to a Firestore database here
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to create an account: ' + err.message);
        }
        setLoading(false);
    }

    return (
        <div className="login-page">
            <div className="login-container glass-card animate-fade-in-up">
                <div className="text-center mb-8">
                    <div className="logo justify-center mb-6" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <Coins className="logo-icon text-secondary" size={36} />
                    </div>
                    <h2 className="mb-2">Join Money Mantri</h2>
                    <p className="text-muted">Create an account to start earning</p>
                </div>

                {error && <div className="alert-error bg-error-light text-error p-3 rounded mb-4 text-sm text-center">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group mb-4">
                        <label>Full Name</label>
                        <div className="input-wrapper">
                            <User className="input-icon" size={20} />
                            <input
                                type="text"
                                placeholder="Rahul Kumar"
                                ref={nameRef}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group mb-4">
                        <label>Email Address</label>
                        <div className="input-wrapper">
                            <Mail className="input-icon" size={20} />
                            <input
                                type="email"
                                placeholder="you@example.com"
                                ref={emailRef}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group mb-4">
                        <label>Password</label>
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                ref={passwordRef}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group mb-6">
                        <label>Confirm Password</label>
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                ref={passwordConfirmRef}
                                required
                            />
                        </div>
                    </div>

                    <button disabled={loading} type="submit" className="btn btn-primary w-full flex justify-center items-center gap-2">
                        Create Account <ArrowRight size={18} />
                    </button>
                </form>

                <p className="text-center text-muted mt-6" style={{ fontSize: '0.9rem' }}>
                    Already have an account? <Link to="/login" className="text-secondary font-semibold">Log in</Link>
                </p>
            </div>

            <div className="glow-blob blob-1" style={{ top: '-10%', left: '-10%' }}></div>
            <div className="glow-blob blob-2" style={{ bottom: '-10%', right: '-10%' }}></div>
        </div>
    );
};

export default Signup;
