import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Seu Nome ou Nome da Agência. Todos os direitos reservados.</p>
                <div className="mt-2">
                    <a href="/about" className="text-gray-400 hover:text-white mx-2">Sobre</a>
                    <a href="/portfolio" className="text-gray-400 hover:text-white mx-2">Portfólio</a>
                    <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contato</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;