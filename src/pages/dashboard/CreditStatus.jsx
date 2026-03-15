import React from 'react';
import { CreditCard, TrendingUp, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

const CreditStatus = () => {
    return (
        <div className="credit-status animate-fade-in-up">
            <div className="mb-6">
                <h2 className="text-light m-0">Credit Eligibility</h2>
                <p className="text-muted mt-1">Your alternative credit score based on app usage.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Main Score Card */}
                <div className="glass-card p-6 md:col-span-2 highlight-bg flex flex-col md:flex-row items-center gap-8">
                    <div className="score-ring relative flex items-center justify-center" style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'conic-gradient(var(--accent) 0%, var(--secondary) 85%, rgba(255,255,255,0.05) 85%)' }}>
                        <div className="inner-circle absolute flex flex-col items-center justify-center" style={{ width: '130px', height: '130px', borderRadius: '50%', background: 'var(--bg-card)' }}>
                            <span className="text-3xl font-bold text-gradient">Excellent</span>
                            <span className="text-xs text-muted mt-1">Tier 3</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-light mb-2">₹5,000 Limit</h3>
                        <p className="text-muted mb-4">You have consistently managed your AI budget and completed 5 micro-gigs, unlocking the highest micro-credit tier.</p>
                        <button className="btn btn-primary" style={{ padding: '8px 20px' }}>Apply for Advance</button>
                    </div>
                </div>

                {/* Status Indicators */}
                <div className="glass-card p-6 flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-secondary" size={24} />
                        <div>
                            <div className="text-sm text-light font-semibold">Identity Verified</div>
                            <div className="text-xs text-muted">Aadhaar Linked</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-secondary" size={24} />
                        <div>
                            <div className="text-sm text-light font-semibold">Income Stable</div>
                            <div className="text-xs text-muted">Gig earnings recognized</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-50">
                        <div className="w-6 h-6 rounded-full border-2 border-dashed border-muted flex items-center justify-center text-xs">3</div>
                        <div>
                            <div className="text-sm text-light font-semibold">Repayment History</div>
                            <div className="text-xs text-muted">Complete 1st advance to unlock</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Credit Building Actions */}
            <h3 className="text-lg text-light mb-4 flex items-center gap-2"><TrendingUp size={18} className="text-accent" /> Unlock Next Tier (₹10,000)</h3>
            <div className="glass-card divide-y divide-white/5">
                {[
                    { title: 'Maintain Budget Streak', desc: 'Stay under your AI budget for 2 more weeks.', pts: '+20 pts', done: false },
                    { title: 'Complete High-Value Gig', desc: 'Finish a micro-gig paying over ₹1,000.', pts: '+50 pts', done: false },
                    { title: 'Connect Bank Account', desc: 'Securely link your primary bank for better analysis.', pts: '+100 pts', done: true },
                ].map((task, i) => (
                    <div key={i} className="p-4 flex justify-between items-center bg-white-5 hover:bg-white-10 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                            <div className="mt-1">
                                {task.done ? <CheckCircle2 className="text-secondary" size={20} /> : <div className="w-5 h-5 rounded-full border border-muted"></div>}
                            </div>
                            <div>
                                <h4 className={`text-md font-semibold ${task.done ? 'text-muted line-through' : 'text-light'}`}>{task.title}</h4>
                                <p className="text-sm text-muted mt-1">{task.desc}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded">{task.pts}</span>
                            <ChevronRight size={16} className="text-muted" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreditStatus;
