import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., sending data to an API
        setSubmitted(true);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            {submitted ? (
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Thank you for your message!</h2>
                    <p>We will get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;