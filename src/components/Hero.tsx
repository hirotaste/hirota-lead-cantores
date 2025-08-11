'use client';

import React from 'react';

const Hero: React.FC = () => {
    const handleSpotifyClick = () => {
        // Replace with actual Spotify link
        window.open('https://open.spotify.com/artist/hirota', '_blank');
    };

    const handleBookingClick = () => {
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
                    {/* Artist Name */}
                    <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl mb-6 text-shadow animate-fade-in">
                        HIROTA
                    </h1>
                    
                    {/* Tagline */}
                    <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light animate-slide-up text-shadow">
                        Levando emoção através da música
                    </p>
                    
                    {/* Subtitle */}
                    <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-slide-up text-shadow">
                        Cantor e compositor que transforma momentos especiais em memórias inesquecíveis
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
                        <button
                            onClick={handleSpotifyClick}
                            className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                            <span>OUÇA AGORA</span>
                        </button>
                        
                        <button
                            onClick={handleBookingClick}
                            className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-dark"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>CONTRATE PARA EVENTOS</span>
                        </button>
                    </div>

                    {/* Social Proof - Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="stat-item text-white">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">500K+</div>
                            <div className="text-sm md:text-base opacity-90">Streams</div>
                        </div>
                        <div className="stat-item text-white">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">200+</div>
                            <div className="text-sm md:text-base opacity-90">Shows</div>
                        </div>
                        <div className="stat-item text-white">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">50K+</div>
                            <div className="text-sm md:text-base opacity-90">Fãs</div>
                        </div>
                        <div className="stat-item text-white">
                            <div className="text-3xl md:text-4xl font-bold text-gradient">5</div>
                            <div className="text-sm md:text-base opacity-90">Anos</div>
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