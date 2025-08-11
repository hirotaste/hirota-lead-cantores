import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import '../styles/globals.css';

export const metadata = {
  title: 'Vibe Studio Digital | Agência Digital para Músicos e Cantores',
  description: 'Onde o talento encontra o mundo. Criamos sites profissionais para cantores, DJs, produtores musicais e artistas brasileiros. Transformamos sua paixão em presença digital impactante.',
  keywords: 'agência digital, sites para cantores, websites para músicos, DJs, produtores musicais, marketing digital música, Brasil',
  openGraph: {
    title: 'Vibe Studio Digital | Onde o talento encontra o mundo',
    description: 'Criamos sites profissionais para cantores, DJs e produtores musicais brasileiros.',
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