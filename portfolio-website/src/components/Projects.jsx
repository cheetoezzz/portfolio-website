import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    // Existing projects (temporarily commented out)
    /*
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with user authentication, payment processing, and inventory management. Built with modern technologies and best practices.",
            techStack: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
            githubUrl: "https://github.com/johndoe/ecommerce-platform",
            liveUrl: "https://ecommerce-demo.johndoe.com"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            techStack: ["React", "Firebase", "Material-UI", "Redux"],
            githubUrl: "https://github.com/johndoe/task-manager",
            liveUrl: "https://taskmanager-demo.johndoe.com"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps for multiple locations.",
            techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
            githubUrl: "https://github.com/johndoe/weather-dashboard",
            liveUrl: "https://weather-demo.johndoe.com"
        },
        {
            title: "Blog Platform",
            description: "A modern blogging platform with markdown support, comment system, and SEO optimization. Features include user profiles and content management.",
            techStack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
            githubUrl: "https://github.com/johndoe/blog-platform",
            liveUrl: "https://blog-demo.johndoe.com"
        }
    ];
    */

    return (
        <div className="max-w-4xl mx-auto text-center py-16">
            {/* Icon */}
            <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Projects Under Revision
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm currently working on updating my project portfolio with more recent and innovative projects.
                Check back soon for an enhanced showcase of my work!
            </p>

            {/* Coming Soon */}
            <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    Coming Soon
                </span>
                <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    );
};

export default Projects;
