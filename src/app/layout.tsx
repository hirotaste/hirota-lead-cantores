import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import '../styles/globals.css';

export const metadata = {
  title: 'Hirota - Cantor e Compositor | Shows e Eventos',
  description: 'Contrate Hirota para seu evento. Cantor e compositor que leva emoção através da música. Shows inesquecíveis para casamentos, festas e eventos corporativos.',
  keywords: 'cantor, compositor, shows, eventos, música, casamento, festa, entretenimento',
  openGraph: {
    title: 'Hirota - Cantor e Compositor | Shows e Eventos',
    description: 'Contrate Hirota para seu evento. Cantor e compositor que leva emoção através da música.',
    type: 'website',
    locale: 'pt_BR',
  }
};

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#F39C12" />
            </head>
            <body>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                    <WhatsAppFloat />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;