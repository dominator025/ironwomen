import React from 'react';
import { Coins, TrendingUp, PieChart, CreditCard, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Overview = () => {
    return (
        <div className="dashboard-grid animate-fade-in-up">
            {/* Main Top Cards */}
            <div className="dash-card glass-card top-stat highlight-bg">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-light opacity-90">Total Balance</p>
                    <Coins size={20} className="text-secondary" />
                </div>
                <h3 className="text-3xl mb-1 mt-2 font-bold text-white">₹14,250</h3>
                <p className="text-secondary text-sm flex items-center gap-1"><TrendingUp size={14} /> +12% this week</p>
            </div>

            <div className="dash-card glass-card top-stat">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-muted">AI Spend Budget</p>
                    <PieChart size={20} className="text-muted" />
                </div>
                <h3 className="text-3xl mb-1 mt-2 text-light">₹8,500 <span className="text-muted text-lg">/ ₹10k</span></h3>
                <div className="progress-bar mt-3"><div className="fill" style={{ width: '85%', background: '#F59E0B' }}></div></div>
            </div>

            <div className="dash-card glass-card top-stat">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-muted">Credit Eligibility</p>
                    <CreditCard size={20} className="text-accent-light" />
                </div>
                <h3 className="text-3xl mb-1 mt-2 text-gradient font-bold">Excellent</h3>
                <p className="text-sm mt-1 text-muted cursor-pointer"><Link to="/dashboard/credit" className="hover:text-accent-light transition">Up to ₹5,000 available →</Link></p>
            </div>

            {/* AI Matches Section */}
            <div className="dash-card glass-card col-span-2">
                <div className="flex justify-between items-center mb-4 border-b border-white-10 pb-4">
                    <h3 className="text-light flex items-center gap-2"><Briefcase size={20} className="text-secondary" /> Recommended Micro-Gigs</h3>
                    <Link to="/dashboard/gigs" className="text-accent-light text-sm hover:underline">View all</Link>
                </div>

                <div className="gigs-list flex flex-col gap-3">
                    <div className="gig-item flex justify-between items-center bg-white-5 p-3 rounded-lg hover-glow transition-all cursor-pointer">
                        <div>
                            <h4 className="text-light text-md font-semibold">Data Entry Task</h4>
                            <p className="text-xs text-muted mt-1">2 hours • High Match</p>
                        </div>
                        <div className="text-right">
                            <div className="text-secondary font-bold text-lg">₹400</div>
                            <button className="btn btn-primary" style={{ padding: '5px 16px', fontSize: '0.8rem', marginTop: '6px' }}>Apply</button>
                        </div>
                    </div>
                    <div className="gig-item flex justify-between items-center bg-white-5 p-3 rounded-lg hover-glow transition-all cursor-pointer">
                        <div>
                            <h4 className="text-light text-md font-semibold">Local Delivery</h4>
                            <p className="text-xs text-muted mt-1">1.5 hours • Evening</p>
                        </div>
                        <div className="text-right">
                            <div className="text-secondary font-bold text-lg">₹250</div>
                            <button className="btn btn-primary" style={{ padding: '5px 16px', fontSize: '0.8rem', marginTop: '6px' }}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Analytics */}
            <div className="dash-card glass-card text-center flex flex-col justify-center align-center relative group overflow-hidden">
                <h3 className="mb-4 z-10 relative">Spend vs Earn</h3>
                <div className="chart-placeholder flex items-end justify-center gap-2 h-32 mb-4 border-b border-white-10 pb-2 z-10 relative">
                    <div className="bar bg-error" style={{ height: '60%' }}></div>
                    <div className="bar bg-secondary" style={{ height: '80%' }}></div>

                    <div className="bar bg-error ml-4" style={{ height: '90%' }}></div>
                    <div className="bar bg-secondary" style={{ height: '40%' }}></div>

                    <div className="bar bg-error ml-4" style={{ height: '50%' }}></div>
                    <div className="bar bg-secondary highlight" style={{ height: '100%' }}></div>
                </div>
                <p className="text-xs text-muted z-10 relative">You are earning 20% more than last week!</p>

                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-[2px]">
                    <Link to="/dashboard/analytics" className="btn btn-primary py-2 px-5 shadow-[0_0_15px_rgba(139,92,246,0.6)]">See Full Breakdown</Link>
                </div>
            </div>
        </div>
    );
};

export default Overview;
