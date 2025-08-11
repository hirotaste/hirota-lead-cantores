'use client';

import React from 'react';

interface TargetAudience {
    id: number;
    title: string;
    description: string;
    icon: string;
    characteristics: string[];
    examples: string[];
}

const TargetAudience: React.FC = () => {
    const audienceTypes: TargetAudience[] = [
        {
            id: 1,
            title: "Cantores",
            description: "Em início de carreira ou já estabelecidos",
            icon: "🎤",
            characteristics: [
                "Buscam profissionalizar a presença online",
                "Querem conectar com mais fãs",
                "Precisam de um site que reflita sua personalidade"
            ],
            examples: ["Cantores independentes", "Artistas em ascensão", "Veteranos da música brasileira"]
        },
        {
            id: 2,
            title: "DJs",
            description: "Que querem expandir sua base de fãs",
            icon: "🎧",
            characteristics: [
                "Precisam divulgar seus sets",
                "Querem booking para eventos",
                "Buscam maior visibilidade online"
            ],
            examples: ["DJs de festa", "Produtores de house/techno", "DJs de casamentos e eventos"]
        },
        {
            id: 3,
            title: "Produtores Musicais",
            description: "Buscando maior visibilidade",
            icon: "🎵",
            characteristics: [
                "Querem showcasing do portfólio",
                "Precisam atrair novos artistas",
                "Buscam parcerias profissionais"
            ],
            examples: ["Beatmakers", "Produtores de estúdio", "Sound designers", "Produtores independentes"]
        },
        {
            id: 4,
            title: "Bandas Independentes",
            description: "Em busca de reconhecimento",
            icon: "🎸",
            characteristics: [
                "Querem divulgar seu trabalho",
                "Precisam vender shows",
                "Buscam crescer a base de fãs"
            ],
            examples: ["Bandas de rock nacional", "Grupos de MPB", "Bandas autorais", "Conjuntos regionais"]
        },
        {
            id: 5,
            title: "Criadores de Conteúdo Musical",
            description: "Artistas que querem profissionalizar sua presença online",
            icon: "⭐",
            characteristics: [
                "Monetizar seu talento",
                "Construir uma marca pessoal",
                "Conectar com audiência certa"
            ],
            examples: ["Compositores", "Instrumentistas", "YouTubers musicais", "Artistas multimídia"]
        }
    ];

    return (
        <section id="publico" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-gradient mb-6">Para Quem Trabalhamos</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Atendemos todos os profissionais do universo musical brasileiro que querem 
                        transformar seu talento em uma presença digital impactante e profissional.
                    </p>
                </div>

                {/* Target Audience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {audienceTypes.map((audience) => (
                        <div key={audience.id} className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="p-8">
                                {/* Icon and Title */}
                                <div className="text-center mb-6">
                                    <div className="text-5xl mb-4">{audience.icon}</div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{audience.title}</h3>
                                    <p className="text-gray-600 text-sm">{audience.description}</p>
                                </div>

                                {/* Characteristics */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-dark mb-3">Características:</h4>
                                    <ul className="space-y-2">
                                        {audience.characteristics.map((characteristic, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm text-gray-600">{characteristic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Examples */}
                                <div>
                                    <h4 className="font-semibold text-dark mb-3">Exemplos:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {audience.examples.map((example, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                                {example}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success Stories Section */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Histórias de Sucesso</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">150%</div>
                            <div className="text-sm opacity-90">Aumento médio de engajamento online</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">85%</div>
                            <div className="text-sm opacity-90">Dos clientes conseguem mais shows</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">3x</div>
                            <div className="text-sm opacity-90">Mais descobertas nas plataformas digitais</div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="testimonial">
                            <p className="text-gray-600 mb-4">
                                "A Vibe Studio transformou completamente minha presença online. Agora recebo muito mais convites para shows!"
                            </p>
                            <p className="text-primary font-semibold">- Marina Silva, Cantora</p>
                        </div>
                        <div className="testimonial">
                            <p className="text-gray-600 mb-4">
                                "Site incrível que realmente capturou a essência da nossa banda. Nossos fãs adoraram!"
                            </p>
                            <p className="text-primary font-semibold">- Banda Raízes do Sertão</p>
                        </div>
                        <div className="testimonial">
                            <p className="text-gray-600 mb-4">
                                "Profissionalismo e qualidade excepcionais. Recomendo para todos os DJs!"
                            </p>
                            <p className="text-primary font-semibold">- DJ Carlos Beat</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Você se identifica com algum desses perfis?</h3>
                        <p className="text-gray-600 mb-6">
                            Seja qual for seu estilo musical ou estágio da carreira, temos a solução perfeita 
                            para amplificar sua presença digital e conectar você com seu público.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contato" className="btn-primary inline-flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span>Começar Meu Projeto</span>
                            </a>
                            <a 
                                href="https://wa.me/5511999999999?text=Olá! Sou um(a) [SEU PERFIL] e gostaria de saber mais sobre como a Vibe Studio Digital pode me ajudar."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                                </svg>
                                <span>Falar no WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;