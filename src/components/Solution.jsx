import React from 'react';
import { BrainCircuit, Target, LayoutDashboard, WalletCards } from 'lucide-react';
import './Solution.css';

const Solution = () => {
    return (
        <section className="section solution-section" id="features">
            <div className="container">
                <div className="text-center mb-8">
                    <div className="section-label">The Solution</div>
                    <h2 className="section-title">One Unified Financial <br /><span className="text-gradient">Intelligence Platform</span></h2>
                    <p className="solution-subtitle mx-auto text-muted max-w-2xl">
                        A mobile-first platform combining spend analytics, income discovery, and responsible credit.
                    </p>
                </div>

                <div className="features-grid mt-8">
                    {/* Card 1 */}
                    <div className="feature-card glass-card">
                        <div className="feature-icon-wrapper">
                            <BrainCircuit className="feature-icon" size={28} />
                        </div>
                        <h3>1. AI Financial Copilot</h3>
                        <p>Automatically analyzes your daily expenses and creates dynamic budgets that adapt to your irregular income behavior.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="feature-card glass-card">
                        <div className="feature-icon-wrapper">
                            <Target className="feature-icon" size={28} />
                        </div>
                        <h3>2. Micro-Work Matching</h3>
                        <p>Our AI suggests small earning opportunities based on your skills, location, and immediate financial needs.</p>
                        <div className="tags flex gap-1 mt-4 flex-wrap">
                            <span className="tag">Freelance</span>
                            <span className="tag">Gig Work</span>
                            <span className="tag">Digital Tasks</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="feature-card glass-card">
                        <div className="feature-icon-wrapper">
                            <LayoutDashboard className="feature-icon" size={28} />
                        </div>
                        <h3>3. Unified Dashboard</h3>
                        <p>Get a single, instant view of your Spend, Earn, and Credit health. Understand your true financial position at a glance.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="feature-card glass-card highlight-card">
                        <div className="feature-icon-wrapper">
                            <WalletCards className="feature-icon text-light" size={28} />
                        </div>
                        <h3 className="text-light">4. Responsible Micro-Credit</h3>
                        <p className="text-light opacity-90">Privacy-first micro-credit engine aligned with RBI-aware guidelines. Access small loans based on your spending behavior and earning potential—not just arbitrary traditional scores.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
