'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        timeline: '',
        budget: '',
        currentWebsite: '',
        message: '',
        newsletter: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const projectTypes = [
        'Site Profissional Completo',
        'Landing Page para Lançamento',
        'Redesign de Site Existente',
        'Branding + Site',
        'E-commerce Musical',
        'Consultoria Digital',
        'Outro'
    ];

    const timelineOptions = [
        'Urgente (até 2 semanas)',
        '1 mês',
        '2-3 meses',
        'Mais de 3 meses',
        'Não tenho pressa'
    ];

    const budgetRanges = [
        'Até R$ 2.500',
        'R$ 2.500 - R$ 5.000',
        'R$ 5.000 - R$ 10.000',
        'R$ 10.000 - R$ 20.000',
        'Acima de R$ 20.000',
        'Vamos conversar'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Here you would typically send the form data to your backend
        console.log('Contact form submitted:', formData);
        alert('Sua solicitação foi enviada! Entraremos em contato em breve para discutir seu projeto.');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            timeline: '',
            budget: '',
            currentWebsite: '',
            message: '',
            newsletter: false
        });
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            content: 'contato@vibestudiodigital.com.br',
            link: 'mailto:contato@vibestudiodigital.com.br'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                </svg>
            ),
            title: 'WhatsApp',
            content: '+55 (11) 99999-9999',
            link: 'https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para meu projeto musical.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Localização',
            content: 'São Paulo, SP - Brasil',
            link: null
        }
    ];

    const socialMedia = [
        {
            name: 'Instagram',
            url: 'https://instagram.com/vibestudiodigital',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/company/vibestudiodigital',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: 'Behance',
            url: 'https://behance.net/vibestudiodigital',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
            )
        }
    ];

    return (
        <section id="contato" className="bg-section section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-gradient mb-6">Vamos Criar Juntos</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        🎯 Pronto para amplificar sua música? Entre em contato e vamos criar sua presença digital de sucesso. 
                        <strong>Vibe Studio Digital - Onde o talento encontra o mundo</strong>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="card">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Solicitar Orçamento</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Telefone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Nome Artístico/Banda</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            placeholder="Ex: Banda Raízes, DJ Beat, Marina Silva"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Tipo de Projeto *</label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        >
                                            <option value="">Selecione...</option>
                                            {projectTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Prazo Desejado</label>
                                        <select
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleInputChange}
                                            className="form-input"
                                        >
                                            <option value="">Selecione...</option>
                                            {timelineOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Orçamento Estimado</label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="form-input"
                                        >
                                            <option value="">Selecione...</option>
                                            {budgetRanges.map((range) => (
                                                <option key={range} value={range}>{range}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Site Atual (se houver)</label>
                                        <input
                                            type="url"
                                            name="currentWebsite"
                                            value={formData.currentWebsite}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            placeholder="https://"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Conte-nos sobre seu projeto</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="form-textarea"
                                        rows={4}
                                        placeholder="Descreva sua visão, objetivos, estilo musical, público-alvo ou qualquer informação que considere importante..."
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="newsletter"
                                        checked={formData.newsletter}
                                        onChange={handleInputChange}
                                        className="rounded border-gray-300 text-primary focus:ring-primary"
                                    />
                                    <label className="text-sm text-gray-600">
                                        Quero receber novidades sobre tendências digitais para músicos
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full flex items-center justify-center space-x-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a7.646 7.646 0 100 15.292V12" />
                                            </svg>
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            <span>Enviar Solicitação</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="card">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
                                <div className="space-y-4">
                                    {contactInfo.map((contact, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-primary bg-opacity-10 text-primary rounded-full flex items-center justify-center">
                                                {contact.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">{contact.title}</h4>
                                                {contact.link ? (
                                                    <a 
                                                        href={contact.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:text-secondary transition-colors duration-300"
                                                    >
                                                        {contact.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600">{contact.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="card">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-6">Nos Acompanhe</h3>
                                <div className="flex space-x-4">
                                    {socialMedia.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
                                        >
                                            <span className="group-hover:scale-110 transition-transform duration-300">
                                                {social.icon}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                                <p className="text-gray-600 mt-4 text-sm">
                                    Siga-nos para ver projetos incríveis, dicas de marketing digital musical e histórias de sucesso dos nossos clientes.
                                </p>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-4">Atendimento Rápido</h3>
                            <p className="mb-6 opacity-90">
                                Tem uma dúvida urgente? Fale conosco pelo WhatsApp e receba resposta em minutos!
                            </p>
                            <a 
                                href="https://wa.me/5511999999999?text=Olá! Gostaria de tirar uma dúvida rápida sobre os serviços da Vibe Studio Digital."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary bg-white text-primary hover:bg-gray-100 border-white"
                            >
                                💬 Chamar no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;