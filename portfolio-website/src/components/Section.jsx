import React from 'react';

const Section = ({ id, title, subtitle, children, className = '' }) => {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 bg-white dark:bg-gray-900 ${className}`}
            aria-labelledby={`${id}-title`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {title && (
                            <h2
                                id={`${id}-title`}
                                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                            >
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
