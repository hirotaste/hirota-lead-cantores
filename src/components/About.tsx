import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre" className="bg-section section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Photo */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl p-1">
                                <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                                    {/* Placeholder for artist photo */}
                                    <div className="text-center text-gray-500">
                                        <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V7H9V9H3V19C3 20.1 3.89 21 5 21H11V19H5V9H21ZM12 8C14.67 8 19 9.33 19 12V16H17V12.5C17 11 15.88 10.5 12 10.5S7 11 7 12.5V16H5V12C5 9.33 9.33 8 12 8Z"/>
                                        </svg>
                                        <p className="text-sm">Foto Profissional</p>
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
                        <h2 className="text-gradient mb-6">Sobre Hirota</h2>
                        
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                Olá! Sou <strong className="text-primary">Hirota</strong>, cantor e compositor apaixonado por transformar momentos especiais em memórias inesquecíveis através da música.
                            </p>
                            
                            <p>
                                Há mais de <strong className="text-secondary">5 anos</strong> levando emoção para casamentos, festas corporativas, eventos privados e apresentações ao vivo. Minha missão é criar uma atmosfera única que conecta pessoas através da música.
                            </p>
                            
                            <p>
                                Com um repertório que vai desde clássicos atemporais até os maiores sucessos atuais, adapto minha performance para cada ocasião, garantindo que seu evento seja <strong className="text-primary">verdadeiramente especial</strong>.
                            </p>
                        </div>

                        {/* Achievements */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                                <div className="text-2xl font-bold text-primary">500K+</div>
                                <div className="text-sm text-gray-600">Streams nas plataformas</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                                <div className="text-2xl font-bold text-secondary">200+</div>
                                <div className="text-sm text-gray-600">Shows realizados</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-lg col-span-2 md:col-span-1">
                                <div className="text-2xl font-bold text-primary">98%</div>
                                <div className="text-sm text-gray-600">Clientes satisfeitos</div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="mt-8 testimonial">
                            <p className="text-gray-600 mb-4">
                                "Hirota foi a escolha perfeita para nosso casamento. Sua voz emocionou todos os convidados e tornou nossa celebração ainda mais especial!"
                            </p>
                            <p className="text-primary font-semibold">- Marina & Carlos</p>
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <a href="#contato" className="btn-primary inline-flex items-center space-x-2">
                                <span>Conheça meu trabalho</span>
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