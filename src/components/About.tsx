import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre" className="bg-section section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl p-1">
                                <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                                    {/* Agency visual placeholder */}
                                    <div className="text-center text-gray-500">
                                        <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7V10C2 16 6 21.1 12 22C18 21.1 22 16 22 10V7L12 2Z"/>
                                        </svg>
                                        <p className="text-sm">Vibe Studio Digital</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse-slow"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-30"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-gradient mb-6">Nossa Missão</h2>
                        
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                Na <strong className="text-primary">Vibe Studio Digital</strong>, acreditamos que cada artista tem uma história única para contar e um som especial para compartilhar com o mundo.
                            </p>
                            
                            <p>
                                Somos mais do que uma agência digital – somos o <strong className="text-secondary">elo entre seu talento e seu público</strong>. Transformamos sua paixão pela música em uma presença digital impactante.
                            </p>
                            
                            <p>
                                Criamos sites personalizados que não apenas apresentam seu trabalho, mas <strong className="text-primary">amplificam sua voz</strong> no universo online.
                            </p>
                        </div>

                        {/* What We Do */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">O Que Fazemos</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-2xl">🎵</span>
                                    <div>
                                        <strong>Sua Música, Seu Palco Digital</strong>
                                        <p className="text-gray-600">Criamos sites que refletem sua identidade artística</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-2xl">🌐</span>
                                    <div>
                                        <strong>Conectando Artistas ao Público</strong>
                                        <p className="text-gray-600">Presença digital completa e otimizada</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                                <div className="text-2xl font-bold text-primary">100+</div>
                                <div className="text-sm text-gray-600">Sites Criados</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                                <div className="text-2xl font-bold text-secondary">50+</div>
                                <div className="text-sm text-gray-600">Artistas Atendidos</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-lg col-span-2 md:col-span-1">
                                <div className="text-2xl font-bold text-primary">98%</div>
                                <div className="text-sm text-gray-600">Satisfação</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <a href="#servicos" className="btn-primary inline-flex items-center space-x-2">
                                <span>Conheça nossos serviços</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;