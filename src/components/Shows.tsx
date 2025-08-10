'use client';

import React, { useState } from 'react';

interface Event {
    id: number;
    date: string;
    time: string;
    venue: string;
    city: string;
    type: string;
    status: 'available' | 'sold-out' | 'private';
}

const Shows: React.FC = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        city: '',
        message: ''
    });

    const upcomingEvents: Event[] = [
        {
            id: 1,
            date: '2024-09-15',
            time: '20:00',
            venue: 'Centro de Eventos Paradise',
            city: 'São Paulo, SP',
            type: 'Show Público',
            status: 'available'
        },
        {
            id: 2,
            date: '2024-09-22',
            time: '19:30',
            venue: 'Espaço Villa Real',
            city: 'Rio de Janeiro, RJ',
            type: 'Evento Privado',
            status: 'private'
        },
        {
            id: 3,
            date: '2024-10-05',
            time: '21:00',
            venue: 'Casa de Shows Melodia',
            city: 'Belo Horizonte, MG',
            type: 'Show Público',
            status: 'available'
        }
    ];

    const eventTypes = [
        'Casamento',
        'Festa de Aniversário',
        'Evento Corporativo',
        'Formatura',
        'Show Público',
        'Evento Privado',
        'Outro'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Booking form submitted:', formData);
        alert('Sua solicitação foi enviada! Entraremos em contato em breve.');
        setShowBookingForm(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            eventType: '',
            eventDate: '',
            city: '',
            message: ''
        });
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'available':
                return (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Ingressos Disponíveis
                    </span>
                );
            case 'sold-out':
                return (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        Esgotado
                    </span>
                );
            case 'private':
                return (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Evento Privado
                    </span>
                );
            default:
                return null;
        }
    };

    return (
        <section id="shows" className="bg-section section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-gradient mb-6">Shows & Eventos</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Confira onde estarei nos próximos meses e garante seu evento com uma apresentação inesquecível. 
                        Agenda limitada - reserve já sua data!
                    </p>
                </div>

                {/* Upcoming Shows */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Próximas Apresentações</h3>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="card">
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-2">
                                                <h4 className="text-xl font-bold text-dark">{event.venue}</h4>
                                                {getStatusBadge(event.status)}
                                            </div>
                                            <div className="text-gray-600 space-y-1">
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>{formatDate(event.date)} às {event.time}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span>{event.city}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                    </svg>
                                                    <span>{event.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                            {event.status === 'available' && (
                                                <button className="btn-secondary">
                                                    Comprar Ingressos
                                                </button>
                                            )}
                                            <button 
                                                onClick={() => setShowBookingForm(true)}
                                                className="btn-primary"
                                            >
                                                Contratar Similar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance Gallery */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Momentos dos Shows</h3>
                    <div className="gallery-grid">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div key={index} className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-xl p-1 transform hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.25 2.1l-.4-.2c-.2-.1-.4-.1-.6 0L9.85 3.85 6.1 2.45c-.2-.1-.4-.1-.6 0l-.4.2c-.2.1-.3.3-.3.5v13.8c0 .2.1.4.3.5l.4.2c.2.1.4.1.6 0l3.75-1.4 3.75 1.4c.2.1.4.1.6 0l.4-.2c.2-.1.3-.3.3-.5V2.6c0-.2-.1-.4-.3-.5z"/>
                                        </svg>
                                        <p className="text-xs">Foto do Show</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Booking CTA */}
                <div className="text-center mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Torne seu evento inesquecível!</h3>
                        <p className="text-gray-600 mb-6">
                            Agenda se esgotando rapidamente. Garante já sua data e proporcione uma experiência única para seus convidados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => setShowBookingForm(true)}
                                className="btn-primary flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Solicitar Orçamento</span>
                            </button>
                            <a 
                                href="https://wa.me/5511999999999?text=Olá! Gostaria de contratar o Hirota para um evento."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                                </svg>
                                <span>WhatsApp Direto</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Booking Form Modal */}
                {showBookingForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold">Contratar Artista</h3>
                                    <button 
                                        onClick={() => setShowBookingForm(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
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
                                        <label className="block text-sm font-medium mb-2">Tipo de Evento *</label>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        >
                                            <option value="">Selecione...</option>
                                            {eventTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Data do Evento *</label>
                                        <input
                                            type="date"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Cidade *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            placeholder="Ex: São Paulo, SP"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Detalhes do Evento</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="form-textarea"
                                            rows={3}
                                            placeholder="Conte-nos mais sobre seu evento..."
                                        />
                                    </div>

                                    <div className="flex space-x-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setShowBookingForm(false)}
                                            className="flex-1 btn-secondary"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 btn-primary"
                                        >
                                            Enviar Solicitação
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Shows;