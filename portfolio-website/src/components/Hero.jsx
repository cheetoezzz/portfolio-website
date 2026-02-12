import React from 'react';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                    Arc John Torralba
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                    Web Developer
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Passionate about creating elegant solutions to complex problems.
                    I specialize in building modern web applications with clean code and user-centric design.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                        View Projects
                    </button>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Hero;
