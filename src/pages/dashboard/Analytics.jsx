import React from 'react';
import { PieChart, BarChart2, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react';

const Analytics = () => {
    return (
        <div className="analytics animate-fade-in-up">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-light m-0">Performance Analytics</h2>
                    <p className="text-muted mt-1">Detailed breakdown of your financial flow.</p>
                </div>
                <select className="bg-white-5 border border-white-10 rounded px-3 py-1 text-sm text-light outline-none">
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Spend Chart Mock */}
                <div className="glass-card p-6">
                    <h3 className="text-lg text-light mb-4 flex items-center gap-2"><PieChart size={18} /> Spending Categories</h3>
                    <div className="flex items-center gap-8">
                        <div className="relative w-32 h-32 rounded-full flex items-center justify-center" style={{ background: 'conic-gradient(#EF4444 0% 40%, #10B981 40% 65%, #8B5CF6 65% 85%, #6B7280 85% 100%)' }}>
                            <div className="w-24 h-24 rounded-full bg-card-bg absolute"></div>
                            <span className="relative text-xl font-bold text-light">₹4,200</span>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 text-sm">
                            <div className="flex justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-error"></span> Food & Groceries</span> <span>40%</span></div>
                            <div className="flex justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary"></span> Transport</span> <span>25%</span></div>
                            <div className="flex justify-between"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-accent"></span> Bills & Utilities</span> <span>20%</span></div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-muted"></span> Discretionary</span>
                                <span className="text-error flex items-center text-xs"><TrendingDown size={12} /> Over UI limit</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Earning Chart Mock */}
                <div className="glass-card p-6">
                    <h3 className="text-lg text-light mb-4 flex items-center gap-2"><BarChart2 size={18} className="text-secondary" /> Income Sources</h3>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-light">Primary Job</span>
                                <span className="font-bold">₹10,500</span>
                            </div>
                            <div className="w-full bg-white-5 h-2 rounded overflow-hidden">
                                <div className="bg-white-20 h-full" style={{ width: '70%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-secondary font-semibold">Platform Gigs</span>
                                <span className="text-secondary font-bold">₹3,750</span>
                            </div>
                            <div className="w-full bg-white-5 h-2 rounded overflow-hidden">
                                <div className="bg-secondary h-full shadow-[0_0_10px_#10B981]" style={{ width: '25%' }}></div>
                            </div>
                        </div>

                        <div className="p-3 bg-secondary-10 rounded border border-secondary/20 mt-4 flex gap-3 items-start">
                            <TrendingUp className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                            <p className="text-xs text-light">Your gig income has increased by <strong>15%</strong> this month! Keep accepting high-match tasks.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-card p-6 border-l-4 border-accent">
                <h3 className="text-lg text-light mb-2 flex items-center gap-2"><AlertCircle size={18} className="text-accent" /> AI Optimization Tip</h3>
                <p className="text-sm text-muted">We noticed you frequently spend on transport in the evening. We found 3 delivery gigs in your usual route that could turn that commute into an earning opportunity, netting you an estimated <strong>₹800/week</strong>.</p>
                <button className="btn btn-primary px-4 py-2 mt-3 text-sm">View Route Matches</button>
            </div>

        </div>
    );
};

export default Analytics;
