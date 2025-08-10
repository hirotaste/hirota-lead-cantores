import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of project 1',
            imageUrl: '/images/project1.jpg',
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2',
            imageUrl: '/images/project2.jpg',
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'Description of project 3',
            imageUrl: '/images/project3.jpg',
            link: '#'
        }
    ];

    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;