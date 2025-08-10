import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Music from '../components/Music';
import Shows from '../components/Shows';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <About />
            <Music />
            <Shows />
            <Gallery />
            <ContactForm />
        </main>
    );
};

export default HomePage;