'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { href: '#inicio', label: 'Início' },
        { href: '#sobre', label: 'Sobre' },
        { href: '#musicas', label: 'Músicas' },
        { href: '#shows', label: 'Shows' },
        { href: '#galeria', label: 'Galeria' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'navbar-sticky' : 'bg-transparent'
        }`}>
            <div className="container-custom">
                <div className="flex justify-between items-center py-4">
                    {/* Logo/Artist Name */}
                    <div className="flex items-center">
                        <Link href="#inicio" className="text-2xl md:text-3xl font-display font-bold text-gradient">
                            HIROTA
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-dark hover:text-primary transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="#contato"
                            className="btn-primary ml-4"
                        >
                            CONTRATE PARA SHOWS
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                            }`}></span>
                            <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                                isMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}></span>
                            <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                            }`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu md:hidden ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-xl font-medium hover:text-primary transition-colors duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="#contato"
                        onClick={() => setIsMenuOpen(false)}
                        className="btn-primary text-lg"
                    >
                        CONTRATE PARA SHOWS
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;