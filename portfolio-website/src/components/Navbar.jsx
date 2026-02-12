import React, { useState, useEffect } from 'react';

import DarkModeToggle from './DarkModeToggle';



const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);



    useEffect(() => {

        const handleScroll = () => {

            setIsScrolled(window.scrollY > 10);

        };



        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);



    const scrollToSection = (sectionId) => {

        const element = document.getElementById(sectionId);

        if (element) {

            element.scrollIntoView({ behavior: 'smooth' });

        }

    };



    return (

        <nav

            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent dark:bg-transparent'

                }`}

            role="navigation"

            aria-label="Main navigation"

        >

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0">

                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</h1>

                    </div>



                    <div className="hidden md:block">

                        <ul className="flex space-x-8">

                            <li>

                                <button

                                    onClick={() => scrollToSection('about')}

                                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"

                                >

                                    About

                                </button>

                            </li>

                            <li>

                                <button

                                    onClick={() => scrollToSection('projects')}

                                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"

                                >

                                    Projects

                                </button>

                            </li>

                            <li>

                                <button

                                    onClick={() => scrollToSection('skills')}

                                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"

                                >

                                    Skills

                                </button>

                            </li>

                            <li>

                                <button

                                    onClick={() => scrollToSection('contact')}

                                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"

                                >

                                    Contact

                                </button>

                            </li>

                        </ul>

                    </div>



                    <div className="flex items-center gap-4">

                        <DarkModeToggle />



                        <div className="md:hidden">

                            <button

                                className="text-gray-700 dark:text-gray-300 p-2"

                                aria-label="Toggle mobile menu"

                            >

                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                                </svg>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </nav>

    );

};



export default Navbar;

