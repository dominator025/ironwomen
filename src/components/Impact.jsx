import React from 'react';
import { Database, ShieldCheck, HeartPulse, GraduationCap, Github, Twitter, Linkedin } from 'lucide-react';
import './Impact.css';

const Impact = () => {
    return (
        <>
            <section className="section" id="ai-trust">
                <div className="container trust-grid">
                    {/* AI Layer */}
                    <div className="glass-card trust-card">
                        <h2 className="mb-4 text-light">AI That Improves Your Financial Life</h2>
                        <ul className="mb-6 check-list">
                            <li>Expense pattern recognition</li>
                            <li>Dynamic adaptive budgeting</li>
                            <li>Risk detection for overspending</li>
                            <li>Personalized earning suggestions</li>
                            <li>Credit eligibility prediction</li>
                        </ul>
                        <div className="tagline font-semibold text-secondary glow-text">Your AI financial co-pilot.</div>
                    </div>

                    {/* Privacy & Trust */}
                    <div className="glass-card trust-card">
                        <h2 className="mb-4 text-light">Built for Trust</h2>
                        <ul className="mb-6 arrow-list">
                            <li>Privacy-first financial data architecture</li>
                            <li>RBI-aware lending principles</li>
                            <li>Secure API banking integrations</li>
                            <li>Transparent credit recommendations</li>
                        </ul>

                        <div className="badges flex gap-4 mt-6 flex-wrap">
                            <div className="badge"><ShieldCheck size={16} /> Secure</div>
                            <div className="badge"><Database size={16} /> Private</div>
                            <div className="badge"><HeartPulse size={16} /> Ethical AI</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section text-center impact-section" id="impact">
                <div className="container">
                    <h2 className="section-title mb-8">Financial Inclusion for the <br /><span className="text-gradient">Next Generation</span></h2>

                    <div className="impact-stats flex justify-center gap-6 flex-wrap mb-12">
                        <div className="i-stat glass-card">
                            <h3 className="text-accent">+45%</h3>
                            <p>Users earning extra income</p>
                        </div>
                        <div className="i-stat glass-card">
                            <h3 className="text-secondary">-30%</h3>
                            <p>Reduction in overspending</p>
                        </div>
                        <div className="i-stat glass-card">
                            <h3 className="text-light">60%</h3>
                            <p>Credit access growth for unbaked</p>
                        </div>
                    </div>

                    <div className="cta-banner highlight-card glass-card">
                        <h2 className="text-light mb-4 text-3xl font-bold">Start Building Financial Stability Today</h2>
                        <p className="mb-8 text-light opacity-90">Join thousands of informal sector youth taking control of their income and credit.</p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary" style={{ background: 'white', color: 'var(--primary)', boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}>Join Beta</button>
                            <button className="btn btn-secondary text-light border-white" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', boxShadow: 'none' }}>Request Demo</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <h3 className="text-light flex items-center gap-2"><div style={{ color: 'var(--secondary)' }}>●</div> Money Mantri</h3>
                        <p className="text-muted mt-4">Turning everyday spending into smart earning for informal sector youth.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">AI Technology</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Github size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12 text-muted" style={{ fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                    &copy; 2026 Money Mantri. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Impact;
