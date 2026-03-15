import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Coins, Lock, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to sign in: ' + err.message);
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
                    <h2 className="mb-2">Welcome Back</h2>
                    <p className="text-muted">Sign in to your Money Mantri account</p>
                </div>

                {error && <div className="alert-error bg-error-light text-error p-3 rounded mb-4 text-sm text-center">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group mb-4">
                        <label>Email Address</label>
                        <div className="input-wrapper">
                            <Mail className="input-icon" size={20} />
                            <input
                                type="email"
                                placeholder="you@example.com"
                                defaultValue="demo@moneymantri.com"
                                ref={emailRef}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group mb-6">
                        <label className="flex justify-between">
                            <span>Password</span>
                            <a href="#" className="forgot-link">Forgot?</a>
                        </label>
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                defaultValue="demo1234"
                                ref={passwordRef}
                                required
                            />
                        </div>
                    </div>

                    <button disabled={loading} type="submit" className="btn btn-primary w-full flex justify-center items-center gap-2">
                        Sign In <ArrowRight size={18} />
                    </button>
                    <p className="text-center text-xs text-muted mt-3">Testing Mode: Just click Sign In to bypass Auth.</p>
                </form>

                <p className="text-center text-muted mt-6" style={{ fontSize: '0.9rem' }}>
                    Don't have an account? <Link to="/signup" className="text-secondary font-semibold">Sign up</Link>
                </p>
            </div>

            <div className="glow-blob blob-1" style={{ top: '-10%', left: '-10%' }}></div>
            <div className="glow-blob blob-2" style={{ bottom: '-10%', right: '-10%' }}></div>
        </div>
    );
};

export default Login;
