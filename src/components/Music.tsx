'use client';

import React, { useState } from 'react';

interface Song {
    id: number;
    title: string;
    duration: string;
    cover: string;
    spotifyUrl: string;
    isNew?: boolean;
}

const Music: React.FC = () => {
    const [currentSong, setCurrentSong] = useState<number | null>(null);

    const songs: Song[] = [
        {
            id: 1,
            title: "Coração em Melodia",
            duration: "3:45",
            cover: "/images/song1-cover.jpg",
            spotifyUrl: "https://open.spotify.com/track/1",
            isNew: true
        },
        {
            id: 2,
            title: "Momentos Eternos",
            duration: "4:12",
            cover: "/images/song2-cover.jpg",
            spotifyUrl: "https://open.spotify.com/track/2"
        },
        {
            id: 3,
            title: "Sonhos de Verão",
            duration: "3:28",
            cover: "/images/song3-cover.jpg",
            spotifyUrl: "https://open.spotify.com/track/3"
        },
        {
            id: 4,
            title: "Noite Estrelada",
            duration: "4:33",
            cover: "/images/song4-cover.jpg",
            spotifyUrl: "https://open.spotify.com/track/4"
        }
    ];

    const handlePlaySong = (songId: number, spotifyUrl: string) => {
        setCurrentSong(songId);
        window.open(spotifyUrl, '_blank');
    };

    const streamingPlatforms = [
        {
            name: "Spotify",
            url: "https://open.spotify.com/artist/hirota",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
            )
        },
        {
            name: "Apple Music",
            url: "https://music.apple.com/artist/hirota",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.001-.08-.004-.12-.004L6.12 0C5.04 0 4.16.882 4.16 1.97v20.06c0 1.088.88 1.97 1.96 1.97h11.88c1.08 0 1.96-.882 1.96-1.97V6.124h.037zm-3.137 1.636l-6.314 5.927c-.306.287-.78.287-1.085 0L7.147 7.76c-.306-.287-.306-.752 0-1.04.306-.287.78-.287 1.085 0l5.771 5.417 5.772-5.417c.305-.287.78-.287 1.085 0 .306.288.306.753 0 1.04z"/>
                </svg>
            )
        },
        {
            name: "YouTube Music",
            url: "https://music.youtube.com/channel/hirota",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        },
        {
            name: "Deezer",
            url: "https://deezer.com/artist/hirota",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.81 12.74h3.98v1.52h-3.98v-1.52zm0-2.5h3.98v1.52h-3.98V10.24zm0-2.51h3.98v1.52h-3.98V7.73zm0-2.5h3.98v1.52h-3.98V5.23zm-4.97 7.51h3.98v1.52h-3.98v-1.52zm0-2.5h3.98v1.52h-3.98V10.24zm0-2.51h3.98v1.52h-3.98V7.73zm0-2.5h3.98v1.52h-3.98V5.23zm0-2.5h3.98v1.52h-3.98V2.73zm-4.98 10.01h3.98v1.52H8.86v-1.52zm0-2.5h3.98v1.52H8.86V10.24zm0-2.51h3.98v1.52H8.86V7.73zm0-2.5h3.98v1.52H8.86V5.23zm0-2.5h3.98v1.52H8.86V2.73zm-4.97 12.51h3.98v1.52H3.89v-1.52zm0-2.5h3.98v1.52H3.89v-1.52zm0-2.51h3.98v1.52H3.89V10.24zm0-2.5h3.98v1.52H3.89V7.73zm0-2.5h3.98v1.52H3.89V5.23zm0-2.5h3.98v1.52H3.89V2.73z"/>
                </svg>
            )
        }
    ];

    return (
        <section id="musicas" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-gradient mb-6">Minhas Músicas</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore meu repertório e ouça as canções que tocam o coração. 
                        Cada música conta uma história, cada melodia desperta uma emoção.
                    </p>
                </div>

                {/* Main Featured Song */}
                <div className="mb-12">
                    <div className="card max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row">
                            {/* Album Cover */}
                            <div className="md:w-1/3">
                                <div className="aspect-square bg-gradient-to-br from-primary to-secondary p-1">
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <div className="text-center text-gray-500">
                                            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                                            </svg>
                                            <p className="text-sm">Capa do Álbum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Song Info */}
                            <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                                <div className="flex items-center mb-2">
                                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full mr-3">NOVO</span>
                                    <span className="text-gray-500">Último lançamento</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Coração em Melodia</h3>
                                <p className="text-gray-600 mb-6">
                                    Uma canção que fala sobre os momentos mais especiais da vida, 
                                    onde cada batida do coração ecoa como uma melodia inesquecível.
                                </p>
                                
                                {/* Play Button */}
                                <button
                                    onClick={() => handlePlaySong(1, songs[0].spotifyUrl)}
                                    className="btn-primary inline-flex items-center space-x-2 w-fit"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                    <span>Ouvir Agora</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Songs List */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-8 text-center">Repertório Completo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {songs.map((song) => (
                            <div key={song.id} className="card">
                                <div className="p-6">
                                    <div className="flex items-center space-x-4">
                                        {/* Mini Cover */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                                            </svg>
                                        </div>
                                        
                                        {/* Song Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <h4 className="font-semibold">{song.title}</h4>
                                                {song.isNew && (
                                                    <span className="bg-secondary text-white text-xs px-2 py-0.5 rounded">NOVO</span>
                                                )}
                                            </div>
                                            <p className="text-gray-500 text-sm">{song.duration}</p>
                                        </div>
                                        
                                        {/* Play Button */}
                                        <button
                                            onClick={() => handlePlaySong(song.id, song.spotifyUrl)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                currentSong === song.id 
                                                    ? 'bg-primary text-white' 
                                                    : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white'
                                            }`}
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Streaming Platforms */}
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-6">Ouça em todas as plataformas</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {streamingPlatforms.map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-white border-2 border-gray-200 rounded-lg px-4 py-3 hover:border-primary hover:text-primary transition-all duration-300 group"
                            >
                                <span className="group-hover:scale-110 transition-transform duration-300">
                                    {platform.icon}
                                </span>
                                <span className="font-medium">{platform.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Music;