import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-gray-800">
            <div className="max-w-7xl mx-auto py-24 px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">Transforme sua carreira musical</h1>
                <p className="mt-6 text-lg text-gray-300">
                    Crie um site incrível que destaque seu talento e atraia novos fãs.
                </p>
                <div className="mt-8">
                    <a href="#contact" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                        Entre em contato
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;