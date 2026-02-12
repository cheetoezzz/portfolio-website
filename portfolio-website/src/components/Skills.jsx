import React from 'react';

const Skills = () => {
    const skills = {
        "Frontend": [
            "React", "JavaScript", "TypeScript", "HTML5", "CSS3",
            "Tailwind CSS", "Material-UI", "Redux", "Next.js"
        ],
        "Backend": [
            "Node.js", "Express.js", "Python", "Django", "PostgreSQL",
            "MongoDB", "REST APIs"
        ],
        "Tools & Others": [
            "Git", "Docker", "AWS", "Supabase", "VS Code",
            "Figma", "Agile/Scrum", "CI/CD", "Testing"
        ]
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {skillList.map((skill, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
