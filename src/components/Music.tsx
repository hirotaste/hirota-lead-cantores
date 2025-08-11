'use client';

import React from 'react';

interface Service {
    id: number;
    title: string;
    description: string;
    features: string[];
    icon: React.ReactElement;
    highlighted?: boolean;
}

const Services: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "Sites Profissionais",
            description: "Sites personalizados que refletem sua identidade artística e amplificam sua presença digital.",
            features: [
                "Design responsivo e moderno",
                "Otimização para SEO",
                "Integração com redes sociais",
                "Player de música integrado",
                "Galeria de fotos e vídeos"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            highlighted: true
        },
        {
            id: 2,
            title: "Estratégias de Branding",
            description: "Fortalecemos sua marca pessoal com identidade visual coesa e messaging impactante.",
            features: [
                "Criação de logotipo",
                "Paleta de cores personalizada",
                "Tipografia exclusiva",
                "Manual de identidade visual",
                "Materiais promocionais"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Presença Digital Completa",
            description: "Gestão integrada de todas suas plataformas digitais para máximo alcance e engajamento.",
            features: [
                "Otimização para streaming",
                "Integração com Spotify/Apple Music",
                "Presença em redes sociais",
                "Newsletter e email marketing",
                "Analytics e relatórios"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Landing Pages Convertedoras",
            description: "Páginas específicas para lançamentos, eventos e campanhas que convertem visitantes em fãs.",
            features: [
                "Foco em conversão",
                "Integração com ticketeiras",
                "Countdown para lançamentos",
                "Coleta de leads",
                "A/B testing"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section id="servicos" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-gradient mb-6">Nossos Serviços</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        🎵 <strong>Sua Música, Seu Palco Digital</strong><br/>
                        Transformamos sua paixão pela música em uma presença digital impactante. 
                        Criamos soluções personalizadas que conectam você diretamente com seus fãs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {services.map((service) => (
                        <div key={service.id} className={`card ${service.highlighted ? 'ring-2 ring-primary' : ''}`}>
                            <div className="p-8">
                                {/* Icon and Title */}
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                                        service.highlighted 
                                            ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                                            : 'bg-gray-100 text-primary'
                                    }`}>
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                        {service.highlighted && (
                                            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">POPULAR</span>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6">{service.description}</p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Value Proposition */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">🌐 Conectando Artistas ao Público</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Não criamos apenas sites – construímos pontes. Desenvolvemos soluções digitais 
                        personalizadas que capturam sua essência artística e transformam visitantes em seguidores fiéis.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                        <div>
                            <div className="text-3xl font-bold">✨</div>
                            <div className="text-sm">Capturam sua essência</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">🚀</div>
                            <div className="text-sm">Amplificam seu alcance</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">🔗</div>
                            <div className="text-sm">Conectam com fãs</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">💫</div>
                            <div className="text-sm">Convertem visitantes</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <h3 className="text-xl font-bold mb-4">Pronto para amplificar sua música?</h3>
                    <a href="#contato" className="btn-primary inline-flex items-center space-x-2">
                        <span>Solicitar Orçamento</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;