import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    Singer Portfolio Agency
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400">About</Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;