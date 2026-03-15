import React, { useState } from 'react';
import { Briefcase, Search, Filter, ShieldCheck, Clock } from 'lucide-react';

const DiscoverGigs = () => {
    const [filter, setFilter] = useState('All');

    const gigs = [
        { id: 1, title: 'Data Entry Task', company: 'Local Retailer', time: '2 hours', type: 'Remote', pay: '₹400', match: '95%' },
        { id: 2, title: 'Evening Delivery', company: 'QuickFoods', time: '1.5 hours', type: 'Local (2km)', pay: '₹250', match: '88%' },
        { id: 3, title: 'Store Inventory', company: 'City Mart', time: '4 hours', type: 'On-site', pay: '₹800', match: '75%' },
        { id: 4, title: 'Online Survey', company: 'Market Research', time: '30 mins', type: 'Remote', pay: '₹100', match: '99%' },
    ];

    return (
        <div className="discover-gigs animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-light m-0">Discover Micro-Gigs</h2>
                    <p className="text-muted mt-1">AI-matched opportunities based on your profile.</p>
                </div>
                <div className="search-box relative hidden md:block">
                    <Search className="absolute left-3 top-2.5 text-muted" size={18} />
                    <input
                        type="text"
                        placeholder="Search gigs..."
                        className="bg-white-5 border border-white-10 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-secondary"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="filters flex gap-3 mb-6 overflow-x-auto pb-2">
                {['All', 'Highest Match', 'High Paying', 'Remote', 'Short Tasks'].map(f => (
                    <button
                        key={f}
                        className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-colors ${filter === f ? 'bg-secondary-10 border-secondary text-secondary' : 'bg-transparent border-white-10 text-muted hover:text-light'}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Gig Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gigs.map(gig => (
                    <div key={gig.id} className="gig-card glass-card p-5 hover-glow cursor-pointer transition-all">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="text-lg text-light font-semibold">{gig.title}</h3>
                                <p className="text-muted text-sm flex items-center gap-1 mt-1">
                                    <ShieldCheck size={14} className="text-accent" /> {gig.company}
                                </p>
                            </div>
                            <div className="match-badge bg-secondary-10 text-secondary border border-secondary/30 px-2 py-1 rounded text-xs font-bold">
                                {gig.match} Match
                            </div>
                        </div>

                        <div className="flex gap-4 mt-4 text-sm text-muted">
                            <span className="flex items-center gap-1"><Clock size={14} /> {gig.time}</span>
                            <span className="flex items-center gap-1"><Briefcase size={14} /> {gig.type}</span>
                        </div>

                        <div className="flex justify-between items-center mt-5 pt-4 border-t border-white-10">
                            <div className="text-xl font-bold text-white">{gig.pay}</div>
                            <button className="btn btn-primary px-6 py-2">Apply Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverGigs;
