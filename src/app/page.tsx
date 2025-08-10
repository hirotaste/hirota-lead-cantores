import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Hero />
            <section className="w-full max-w-4xl p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
                <p className="text-center mb-6">
                    We specialize in creating stunning websites for singers and musicians, helping you showcase your talent and connect with your audience.
                </p>
            </section>
            <Portfolio />
            <ContactForm />
        </main>
    );
};

export default HomePage;