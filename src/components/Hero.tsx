'use client';

import React from 'react';

const Hero: React.FC = () => {
    const handlePortfolioClick = () => {
        document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleQuoteClick = () => {
        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-hero"></div>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white section-padding">
                <div className="container-custom">
                    {/* Agency Name */}
                    <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-shadow animate-fade-in">
                        VIBE STUDIO DIGITAL
                    </h1>
                    
                    {/* Tagline */}
                    <p className="text-2xl md:text-3xl lg:text-4xl mb-8 font-light animate-slide-up text-shadow">
                        "Onde o talento encontra o mundo"
                    </p>
                    
                    {/* Subtitle */}
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-slide-up text-shadow">
                        Somos mais do que uma agência digital – somos o elo entre seu talento e seu público. 
                        Transformamos sua paixão pela música em uma presença digital impactante.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
                        <button
                            onClick={handlePortfolioClick}
                            className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span>NOSSOS DIFERENCIAIS</span>
                        </button>
                        
                        <button
                            onClick={handleQuoteClick}
                            className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-dark"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>SOLICITAR ORÇAMENTO</span>
                        </button>
                    </div>

                    {/* Social Proof - Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="stat-item text-white">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">100+</div>
                            <div className="text-sm md:text-base opacity-90">Sites Criados</div>
                        </div>
                        <div className="stat-item text-white">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
                            <div className="text-sm md:text-base opacity-90">Artistas Atendidos</div>
                        </div>
                        <div className="stat-item text-white">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">98%</div>
                            <div className="text-sm md:text-base opacity-90">Satisfação</div>
                        </div>
                        <div className="stat-item text-white">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">3</div>
                            <div className="text-sm md:text-base opacity-90">Anos no Mercado</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;