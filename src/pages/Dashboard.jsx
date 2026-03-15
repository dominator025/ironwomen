import React from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Compass, CreditCard, PieChart, Settings, Bell, User, Coins } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import DiscoverGigs from './dashboard/DiscoverGigs';
import CreditStatus from './dashboard/CreditStatus';
import Analytics from './dashboard/Analytics';
import Overview from './dashboard/Overview';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch {
            console.error("Failed to log out");
        }
    };

    const navItems = [
        { path: '/dashboard', label: 'Overview', icon: Home, exact: true },
        { path: '/dashboard/gigs', label: 'Discover Gigs', icon: Compass },
        { path: '/dashboard/credit', label: 'Credit Status', icon: CreditCard },
        { path: '/dashboard/analytics', label: 'Analytics', icon: PieChart },
    ];

    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            <aside className="sidebar glass-card">
                <div className="logo mb-8 cursor-pointer" onClick={() => navigate('/')}>
                    <Coins className="logo-icon text-secondary" size={24} />
                    <span>Money Mantri</span>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map(item => {
                        const Icon = item.icon;
                        const isActive = item.exact
                            ? location.pathname === item.path
                            : location.pathname.startsWith(item.path);

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-item ${isActive ? 'active' : ''}`}
                            >
                                <Icon size={20} /> {item.label}
                            </Link>
                        );
                    })}
                    <div className="divider"></div>
                    <a href="#" className="nav-item"><Settings size={20} /> Settings</a>
                </nav>

                <div className="sidebar-bottom mt-auto pt-4">
                    <div className="text-xs text-muted mb-3 flex items-center gap-2 px-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div> Logged in
                    </div>
                    <button className="btn btn-secondary w-full py-2 hover:bg-error/20 hover:text-error hover:border-error/30" onClick={handleLogout}>Logout</button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main relative">
                <header className="dash-topbar glass-card flex justify-between items-center mb-6 sticky top-0 z-30 opacity-95 backdrop-blur-md">
                    <h2 className="text-light m-0 text-xl font-semibold">
                        {navItems.find(i => location.pathname === i.path || (!i.exact && location.pathname.startsWith(i.path)))?.label || 'Dashboard'}
                    </h2>
                    <div className="topbar-actions flex gap-4 items-center">
                        <button className="icon-btn relative bg-white/5 hover:bg-white/10 rounded-full">
                            <Bell size={20} />
                            <span className="notif-dot"></span>
                        </button>
                        <div className="user-avatar shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                            <User size={20} />
                        </div>
                    </div>
                </header>

                <div className="dashboard-content pb-10">
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/gigs" element={<DiscoverGigs />} />
                        <Route path="/credit" element={<CreditStatus />} />
                        <Route path="/analytics" element={<Analytics />} />
                    </Routes>
                </div>

                {/* Background glow in dashboard */}
                <div className="glow-blob blob-1 fixed pointer-events-none" style={{ top: '10%', right: '10%', opacity: '0.05', zIndex: 0 }}></div>
            </main>
        </div>
    );
};

export default Dashboard;
