import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import DemoFlow from '../components/DemoFlow';
import Impact from '../components/Impact';

const Landing = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Solution />
                <DemoFlow />
                <Impact />
            </main>
        </>
    );
};

export default Landing;
