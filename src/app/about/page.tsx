import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
            <p className="mb-4">
                Sou um desenvolvedor especializado em criar sites para cantores e artistas. Com uma paixão por design e funcionalidade, meu objetivo é ajudar artistas a se destacarem na internet e a se conectarem com seus fãs.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Serviços Oferecidos</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Desenvolvimento de sites personalizados</li>
                <li>Otimização para SEO</li>
                <li>Integração com redes sociais</li>
                <li>Suporte contínuo e manutenção</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Minha Abordagem</h2>
            <p>
                Cada projeto é único, e eu trabalho em estreita colaboração com meus clientes para entender suas necessidades e objetivos. Meu foco é criar experiências digitais que não apenas impressionem, mas também convertam visitantes em fãs.
            </p>
        </div>
    );
};

export default AboutPage;