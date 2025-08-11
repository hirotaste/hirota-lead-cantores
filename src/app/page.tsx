import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Music';
import Differentials from '../components/Shows';
import TargetAudience from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Differentials />
            <TargetAudience />
            <ContactForm />
        </main>
    );
};

export default HomePage;