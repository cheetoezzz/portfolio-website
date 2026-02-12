import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {currentYear} Portfolio. Built with React and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
