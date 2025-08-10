import React from 'react';
import Portfolio from '../../components/Portfolio';

const PortfolioPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
            <p className="mb-4">Here are some of the websites I've created for talented singers:</p>
            <Portfolio />
        </div>
    );
};

export default PortfolioPage;