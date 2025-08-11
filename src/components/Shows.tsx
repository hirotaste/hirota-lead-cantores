'use client';

import React from 'react';

interface Differential {
    id: number;
    icon: string;
    title: string;
    description: string;
}

interface ClientType {
    id: number;
    title: string;
    description: string;
    icon: string;
    examples: string[];
}

const Differentials: React.FC = () => {
    const differentials: Differential[] = [
        {
            id: 1,
            icon: "✨",
            title: "Capturam sua essência artística",
            description: "Entendemos que cada artista tem uma vibe única. Criamos sites que refletem verdadeiramente sua personalidade e estilo musical."
        },
        {
            id: 2,
            icon: "🚀",
            title: "Amplificam seu alcance",
            description: "Utilizamos estratégias de SEO e otimização para que sua música seja descoberta por um público maior e mais engajado."
        },
        {
            id: 3,
            icon: "🔗",
            title: "Conectam você diretamente com seus fãs",
            description: "Criamos pontes digitais que aproximam você do seu público, facilitando o engajamento e construindo uma base sólida de fãs."
        },
        {
            id: 4,
            icon: "💫",
            title: "Transformam visitantes em seguidores fiéis",
            description: "Nossos sites são otimizados para conversão, transformando quem visita em verdadeiros fãs e seguidores do seu trabalho."
        }
    ];

    const clientTypes: ClientType[] = [
        {
            id: 1,
            title: "Cantores",
            description: "Em início de carreira ou já estabelecidos",
            icon: "🎤",
            examples: ["Cantores independentes", "Artistas em ascensão", "Veteranos da música"]
        },
        {
            id: 2,
            title: "DJs",
            description: "Que querem expandir sua base de fãs",
            icon: "🎧",
            examples: ["DJs de festa", "Produtores de house", "DJs de casamentos"]
        },
        {
            id: 3,
            title: "Produtores Musicais",
            description: "Buscando maior visibilidade",
            icon: "🎵",
            examples: ["Beatmakers", "Produtores de estúdio", "Sound designers"]
        },
        {
            id: 4,
            title: "Bandas Independentes",
            description: "Em busca de reconhecimento",
            icon: "🎸",
            examples: ["Bandas de rock", "Grupos de MPB", "Bandas autorais"]
        },
        {
            id: 5,
            title: "Artistas Diversos",
            description: "Que querem profissionalizar sua presença online",
            icon: "⭐",
            examples: ["Compositores", "Instrumentistas", "Artistas multimídia"]
        }
    ];

    return (
        <section id="diferenciais" className="bg-section section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-gradient mb-6">Nosso Diferencial</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Não criamos apenas sites – construímos pontes. Entendemos que cada cantor, DJ e produtor musical tem uma vibe única.
                    </p>
                </div>

                {/* Differentials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {differentials.map((differential) => (
                        <div key={differential.id} className="card">
                            <div className="p-8 text-center">
                                <div className="text-4xl mb-4">{differential.icon}</div>
                                <h3 className="text-xl font-bold mb-4 text-primary">{differential.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{differential.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* For Who We Work Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-primary">Para Quem Trabalhamos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clientTypes.map((client) => (
                            <div key={client.id} className="card hover:shadow-2xl transition-all duration-300">
                                <div className="p-6 text-center">
                                    <div className="text-3xl mb-4">{client.icon}</div>
                                    <h4 className="text-lg font-bold mb-2">{client.title}</h4>
                                    <p className="text-gray-600 mb-4 text-sm">{client.description}</p>
                                    <div className="space-y-1">
                                        {client.examples.map((example, index) => (
                                            <div key={index} className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-1">
                                                {example}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promise Section */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Nossa Promessa</h3>
                    <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
                        Na Vibe Studio Digital, sua música não fica escondida no estúdio. Criamos o palco digital 
                        perfeito para que seu talento encontre exatamente as pessoas que estão esperando para ouvi-lo.
                    </p>
                    <p className="text-xl font-semibold mb-8">
                        Porque todo grande artista merece ser descoberto.
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                        <div>
                            <div className="text-3xl font-bold">100+</div>
                            <div className="text-sm opacity-90">Sites Criados</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">50+</div>
                            <div className="text-sm opacity-90">Artistas Atendidos</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">98%</div>
                            <div className="text-sm opacity-90">Satisfação</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">3</div>
                            <div className="text-sm opacity-90">Anos no Mercado</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold mb-6">🎯 Pronto para amplificar sua música?</h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Entre em contato e vamos criar juntos sua presença digital de sucesso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contato" className="btn-primary inline-flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>Solicitar Orçamento</span>
                        </a>
                        <a 
                            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Vibe Studio Digital."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                            </svg>
                            <span>WhatsApp Direto</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentials;