import React from 'react';
import { ShieldAlert, BarChart3, AlertCircle, XCircle, CheckCircle2 } from 'lucide-react';
import './Problem.css';

const Problem = () => {
    return (
        <section className="section problem-section" id="problem">
            <div className="container">
                <div className="text-center mb-8">
                    <div className="section-label">The Reality</div>
                    <h2 className="section-title">Financial Instability is a Daily Reality <br /> for Millions of Youth</h2>
                </div>

                <div className="problem-grid">
                    {/* Problem Points */}
                    <div className="problem-points flex flex-col gap-4 justify-center">
                        <div className="point-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <AlertCircle className="point-icon text-error" />
                            <div>
                                <h4>Irregular Income</h4>
                                <p>Gig and informal jobs offer no predictable cash flow.</p>
                            </div>
                        </div>

                        <div className="point-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <BarChart3 className="point-icon text-warning" />
                            <div>
                                <h4>Overspending Trap</h4>
                                <p>Lack of dynamic budgeting tools leads to debt.</p>
                            </div>
                        </div>

                        <div className="point-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <XCircle className="point-icon text-error-light" />
                            <div>
                                <h4>No Income Discovery</h4>
                                <p>Missing personalized matches for earning opportunities.</p>
                            </div>
                        </div>

                        <div className="point-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <ShieldAlert className="point-icon text-accent" />
                            <div>
                                <h4>Invisible to Credit</h4>
                                <p>Limited or no access to responsible borrowing options.</p>
                            </div>
                        </div>
                    </div>

                    {/* Broken System Visual */}
                    <div className="broken-system-visual glass-card animate-fade-in-up">
                        <h3 className="mb-4">Why Current Financial Apps Fail</h3>

                        <div className="comparison-table">
                            <div className="table-header">
                                <div>Feature</div>
                                <div>Existing Apps</div>
                                <div className="our-platform">Money Mantri</div>
                            </div>

                            <div className="table-row">
                                <div>Focus</div>
                                <div className="text-muted">Only tracking</div>
                                <div className="text-gradient font-semibold">Spend + Earn + Credit</div>
                            </div>

                            <div className="table-row">
                                <div>Income</div>
                                <div className="text-muted"><XCircle size={16} className="inline-icon" /> No discovery</div>
                                <div><CheckCircle2 size={16} className="text-secondary inline-icon" /> AI Micro-Work</div>
                            </div>

                            <div className="table-row">
                                <div>Budgeting</div>
                                <div className="text-muted">Generic/Static</div>
                                <div><CheckCircle2 size={16} className="text-secondary inline-icon" /> Dynamic AI</div>
                            </div>

                            <div className="table-row">
                                <div>Growth</div>
                                <div className="text-muted"><XCircle size={16} className="inline-icon" /> No path</div>
                                <div><CheckCircle2 size={16} className="text-secondary inline-icon" /> Credit Building</div>
                            </div>
                        </div>

                        <div className="tagline mt-6 text-center">
                            <p>Tracking money isn't enough. <br /><span className="text-light font-semibold">You need tools to earn more.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
