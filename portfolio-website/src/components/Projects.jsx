import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Concert Event Tracker",
            description: "A modern full-stack web application that allows users to discover and track upcoming concerts",
            techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Ticketmaster API", "Bandsintown API"],
            githubUrl: "https://github.com/cheetoezzz/concert-event-tracker",
            liveUrl: "https://event-tracker-lilac-tau.vercel.app/",
            image: "/src/assets/eventtracker.PNG"
        },
        // {
        //     title: "E-Commerce Platform",
        //     description: "A full-stack e-commerce solution with user authentication, payment processing, and inventory management. Built with modern technologies and best practices.",
        //     techStack: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
        //     githubUrl: "https://github.com/cheetoezzz",
        //     liveUrl: "https://ecommerce-demo.johndoe.com"
        // },
        // {
        //     title: "Task Management App",
        //     description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        //     techStack: ["React", "Firebase", "Material-UI", "Redux"],
        //     githubUrl: "https://github.com/cheetoezzz",
        //     liveUrl: "https://taskmanager-demo.johndoe.com"
        // },
        // {
        //     title: "Weather Dashboard",
        //     description: "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps for multiple locations.",
        //     techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
        //     githubUrl: "https://github.com/cheetoezzz",
        //     liveUrl: "https://weather-demo.johndoe.com"
        // },
        // {
        //     title: "Blog Platform",
        //     description: "A modern blogging platform with markdown support, comment system, and SEO optimization. Features include user profiles and content management.",
        //     techStack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
        //     githubUrl: "https://github.com/cheetoezzz",
        //     liveUrl: "https://blog-demo.johndoe.com"
        // }
    ];

    return (
        <div className="max-w-4xl mx-auto text-center py-16">

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                        image={project.image}
                    />
                ))}
            </div>

            {/* More projects notice */}
            <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                    More projects coming soon...
                </p>
            </div>
        </div>
    );
};

export default Projects;
