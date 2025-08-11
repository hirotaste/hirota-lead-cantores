'use client';

import React, { useState } from 'react';

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: 'shows' | 'bastidores' | 'sessoes';
    title: string;
}

const Gallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'shows' | 'bastidores' | 'sessoes'>('all');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const images: GalleryImage[] = [
        {
            id: 1,
            src: '/images/gallery/show1.jpg',
            alt: 'Show no Centro de Eventos Paradise',
            category: 'shows',
            title: 'Show no Centro de Eventos Paradise'
        },
        {
            id: 2,
            src: '/images/gallery/bastidores1.jpg',
            alt: 'Preparação nos bastidores',
            category: 'bastidores',
            title: 'Preparação nos bastidores'
        },
        {
            id: 3,
            src: '/images/gallery/sessao1.jpg',
            alt: 'Sessão de fotos promocional',
            category: 'sessoes',
            title: 'Sessão de fotos promocional'
        },
        {
            id: 4,
            src: '/images/gallery/show2.jpg',
            alt: 'Apresentação em casamento',
            category: 'shows',
            title: 'Apresentação em casamento'
        },
        {
            id: 5,
            src: '/images/gallery/bastidores2.jpg',
            alt: 'Momento de descontração',
            category: 'bastidores',
            title: 'Momento de descontração'
        },
        {
            id: 6,
            src: '/images/gallery/sessao2.jpg',
            alt: 'Ensaio no estúdio',
            category: 'sessoes',
            title: 'Ensaio no estúdio'
        },
        {
            id: 7,
            src: '/images/gallery/show3.jpg',
            alt: 'Show em evento corporativo',
            category: 'shows',
            title: 'Show em evento corporativo'
        },
        {
            id: 8,
            src: '/images/gallery/bastidores3.jpg',
            alt: 'Interação com fãs',
            category: 'bastidores',
            title: 'Interação com fãs'
        },
        {
            id: 9,
            src: '/images/gallery/sessao3.jpg',
            alt: 'Gravação do novo clipe',
            category: 'sessoes',
            title: 'Gravação do novo clipe'
        }
    ];

    const categories = [
        { key: 'all', label: 'Todas', count: images.length },
        { key: 'shows', label: 'Shows', count: images.filter(img => img.category === 'shows').length },
        { key: 'bastidores', label: 'Bastidores', count: images.filter(img => img.category === 'bastidores').length },
        { key: 'sessoes', label: 'Sessões', count: images.filter(img => img.category === 'sessoes').length }
    ];

    const filteredImages = selectedCategory === 'all' 
        ? images 
        : images.filter(img => img.category === selectedCategory);

    const openLightbox = (image: GalleryImage) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (!selectedImage) return;
        
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;
        
        if (direction === 'prev') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
        } else {
            newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
        }
        
        setSelectedImage(filteredImages[newIndex]);
    };

    // Mock image placeholder component
    const ImagePlaceholder: React.FC<{ title: string; category: string }> = ({ title, category }) => {
        const getIcon = () => {
            switch (category) {
                case 'shows':
                    return (
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V7H9V9H3V19C3 20.1 3.89 21 5 21H11V19H5V9H21ZM12 8C14.67 8 19 9.33 19 12V16H17V12.5C17 11 15.88 10.5 12 10.5S7 11 7 12.5V16H5V12C5 9.33 9.33 8 12 8Z"/>
                        </svg>
                    );
                case 'bastidores':
                    return (
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z"/>
                        </svg>
                    );
                case 'sessoes':
                    return (
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H8V4H20V16M12,5.5V13.5L18,9.5L12,5.5Z"/>
                        </svg>
                    );
                default:
                    return (
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                    );
            }
        };

        return (
            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center text-white p-4">
                {getIcon()}
                <p className="text-sm text-center mt-2 font-medium">{title}</p>
            </div>
        );
    };

    return (
        <section id="galeria" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-gradient mb-6">Galeria</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Momentos especiais capturados em cada apresentação. 
                        Veja a energia e emoção que levo para cada evento.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key as any)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === category.key
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {category.label} ({category.count})
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                            onClick={() => openLightbox(image)}
                        >
                            <ImagePlaceholder title={image.title} category={image.category} />
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Nenhuma imagem encontrada nesta categoria.</p>
                    </div>
                )}

                {/* Lightbox */}
                {selectedImage && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
                            >
                                ×
                            </button>

                            {/* Previous Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage('prev');
                                }}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
                            >
                                ‹
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage('next');
                                }}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
                            >
                                ›
                            </button>

                            {/* Image */}
                            <div 
                                className="max-w-full max-h-full bg-white rounded-lg overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="aspect-square max-w-3xl max-h-[80vh] bg-gray-100">
                                    <ImagePlaceholder title={selectedImage.title} category={selectedImage.category} />
                                </div>
                                
                                {/* Image Info */}
                                <div className="p-6 bg-white">
                                    <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                                    <div className="flex items-center space-x-4 text-gray-600">
                                        <span className="capitalize">{selectedImage.category}</span>
                                        <span>•</span>
                                        <span>{filteredImages.findIndex(img => img.id === selectedImage.id) + 1} de {filteredImages.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Download Press Kit */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Kit de Imprensa</h3>
                        <p className="mb-6 opacity-90">
                            Baixe fotos profissionais em alta resolução e material promocional para divulgação.
                        </p>
                        <button className="btn-secondary bg-white text-primary hover:bg-gray-100 hover:text-primary border-white">
                            Download Press Kit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;