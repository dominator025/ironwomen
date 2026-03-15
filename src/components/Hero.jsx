import React from 'react';
import { Play, TrendingUp, Briefcase, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section flex items-center">
            <div className="container hero-grid">
                <div className="hero-content animate-fade-in-up">
                    <div className="beta-badge">
                        <span className="pulse-dot"></span>
                        AI-Powered Financial Assistant
                    </div>
                    <h1>Turn Your Spending Into <span className="text-gradient">Smart Earning.</span></h1>
                    <p className="hero-subtitle">
                        The first financial co-pilot built for informal sector youth. Track spending, discover micro-work instantly, and build a responsible credit history without a traditional score.
                    </p>
                    <div className="hero-cta flex gap-2">
                        <button className="btn btn-primary" onClick={() => navigate('/login')}>Get Started</button>
                        <button className="btn btn-secondary flex items-center gap-1">
                            <Play size={18} /> Try Demo
                        </button>
                    </div>

                    <div className="hero-stats flex gap-6 mt-10">
                        <div className="stat-item">
                            <span className="stat-value">50k+</span>
                            <span className="stat-label">Active Users</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">₹2Cr+</span>
                            <span className="stat-label">Credit unlocked</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="dashboard-preview float-anim">
                        {/* Dashboard Header UI */}
                        <div className="dash-header">
                            <div className="dash-user">
                                <div className="dash-avatar"></div>
                                <div>
                                    <div className="dash-name">Earnings Intelligence</div>
                                    <div className="dash-status text-secondary text-xs">Live Sync</div>
                                </div>
                            </div>
                        </div>

                        {/* Dashboard AI Insight */}
                        <div className="dash-insight mt-4">
                            <div className="insight-icon"><TrendingUp size={16} /></div>
                            <div>
                                <span className="insight-title">AI Insight:</span>
                                <span className="insight-text">You spent ₹400 on transport. Want to earn ₹500 doing a delivery gig nearby?</span>
                            </div>
                        </div>

                        {/* Dashboard Widgets */}
                        <div className="dash-widgets grid-2 mt-4 gap-3">
                            <div className="dash-widget">
                                <div className="widget-icon bg-white-10"><Briefcase size={16} className="text-light" /></div>
                                <div className="widget-value text-light mt-2">2 Gigs Matches</div>
                                <div className="widget-label text-muted text-xs">Nearby, 2 hours</div>
                            </div>
                            <div className="dash-widget" style={{ border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                                <div className="widget-icon bg-secondary-10"><CreditCard size={16} className="text-secondary" /></div>
                                <div className="widget-value text-secondary mt-2">Credit Expanding</div>
                                <div className="widget-label text-muted text-xs">+15 pts this month</div>
                            </div>
                        </div>

                        <div className="dash-chart mt-4">
                            <div className="text-xs text-muted mb-2">Spend vs Earn Loop</div>
                            <div className="chart-bars flex items-end h-16 gap-1">
                                {[40, 60, 30, 80, 50, 90, 45, 100].map((h, i) => (
                                    <div key={i} className={`chart-bar ${i % 2 === 0 ? 'bg-error-light' : 'bg-secondary'}`} style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glow-blob blob-1"></div>
                    <div className="glow-blob blob-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
