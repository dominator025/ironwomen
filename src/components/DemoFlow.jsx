import React from 'react';
import { Smartphone, RefreshCw, Zap, LineChart, Lock } from 'lucide-react';
import './DemoFlow.css';

const DemoFlow = () => {
    return (
        <>
            <section className="section demo-section" id="how-it-works">
                <div className="container">
                    <div className="text-center mb-8">
                        <h2 className="section-title">How Money Mantri Works</h2>
                    </div>

                    <div className="steps-container flex justify-between gap-6">
                        <div className="step-item text-center">
                            <div className="step-icon glass-card"><Lock className="text-secondary" size={32} /></div>
                            <h4>Step 1</h4>
                            <p>Connect bank / UPI data securely</p>
                        </div>

                        <div className="step-connector"></div>

                        <div className="step-item text-center">
                            <div className="step-icon glass-card"><LineChart className="text-secondary" size={32} /></div>
                            <h4>Step 2</h4>
                            <p>AI analyzes spending patterns</p>
                        </div>

                        <div className="step-connector"></div>

                        <div className="step-item text-center">
                            <div className="step-icon glass-card"><Zap className="text-secondary" size={32} /></div>
                            <h4>Step 3</h4>
                            <p>Platform suggests earning opportunities</p>
                        </div>

                        <div className="step-connector"></div>

                        <div className="step-item text-center">
                            <div className="step-icon glass-card"><RefreshCw className="text-secondary" size={32} /></div>
                            <h4>Step 4</h4>
                            <p>Build financial stability & credit</p>
                        </div>
                    </div>

                    <div className="mobile-screens mt-8 flex justify-center gap-4 flex-wrap">
                        <div className="mobile-mockup glass-card">
                            <div className="mockup-header">Dashboard</div>
                            <div className="mockup-body">
                                <div className="m-card highlight">Balance: ₹12,400</div>
                                <div className="m-card">Recent: Uber ₹550</div>
                            </div>
                        </div>

                        <div className="mobile-mockup glass-card">
                            <div className="mockup-header">Micro-Work</div>
                            <div className="mockup-body">
                                <div className="m-card">+ ₹300 Delivery Gig</div>
                                <div className="m-card text-secondary">Match Score: 98%</div>
                                <button className="btn btn-primary" style={{ width: '100%', padding: '6px', fontSize: '12px', marginTop: '10px' }}>Accept Gig</button>
                            </div>
                        </div>

                        <div className="mobile-mockup glass-card">
                            <div className="mockup-header">Credit Health</div>
                            <div className="mockup-body text-center">
                                <div className="credit-score text-gradient" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Good</div>
                                <p className="text-muted" style={{ fontSize: '0.8rem' }}>Based on recent income</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section loop-section">
                <div className="container">
                    <div className="text-center mb-8">
                        <div className="section-label text-accent-light">Key Innovation</div>
                        <h2 className="section-title">The Spend → Earn → Credit Loop</h2>
                    </div>

                    <div className="loop-diagram text-center">
                        <div className="loop-box glass-card animate-fade-in-up">Spend Insights</div>
                        <div className="loop-arrow">↓</div>
                        <div className="loop-box glass-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Smart Budgeting</div>
                        <div className="loop-arrow">↓</div>
                        <div className="loop-box glass-card animate-fade-in-up highlight-card" style={{ animationDelay: '0.2s' }}><span className="text-light">Micro-Work Discovery</span></div>
                        <div className="loop-arrow">↓</div>
                        <div className="loop-box glass-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Income Growth</div>
                        <div className="loop-arrow">↓</div>
                        <div className="loop-box glass-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Credit Eligibility</div>

                        <p className="mt-8 text-secondary font-semibold" style={{ fontSize: '1.2rem', textShadow: 'var(--green-glow)' }}>This creates a self-improving financial cycle.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DemoFlow;
