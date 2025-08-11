import React from 'react';
import ContactForm from '../../components/ContactForm';

const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6">If you're interested in our services or have any questions, please fill out the form below.</p>
            <ContactForm />
        </div>
    );
};

export default ContactPage;