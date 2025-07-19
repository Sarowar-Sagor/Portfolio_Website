// components/SkillsSection.js
import React from 'react';
import { motion } from "motion/react";
import Image from 'next/image'; // Use next/image for optimized images
// If using react-icons, import them like:
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGitAlt } from 'react-icons/fa';
// import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiVscode, SiRedux, SiExpress } from 'react-icons/si';

// Example skill data (replace icon paths with actual paths or component imports)
const skillsData = [
    {
        category: 'Languages',
        items: [
            { name: 'C/C++', icon: '/c.svg' }, // Example path for SVG
            { name: 'Python', icon: '/python-5.svg' },
            { name: 'JavaScript', icon: '/javascript-1.svg' },
            { name: 'HTML', icon: '/html5-2.svg' },
            { name: 'CSS', icon: '/css-3.svg' },
        ],
    },
    {
        category: 'Frameworks',
        items: [
            { name: 'Express.js', icon: '/icons8-express-js.svg' },
            { name: 'Next.js', icon: '/next-js.svg' },
        ],
    },
    {
        category: 'Libraries',
        items: [
            { name: 'React.js', icon: '/react-2.svg' },
            { name: 'Redux', icon: '/redux.svg' },
            { name: 'Tailwind CSS', icon: '/tailwindcss.svg' },
            { name: 'DaisyUI', icon: '/daisy.png' }, // Assuming an icon exists or make one
            { name: 'React Router', icon: '/download.png' }, // Assuming an icon exists or make one
        ],
    },
    {
        category: 'Databases',
        items: [
            { name: 'MongoDB', icon: '/mongodb-icon-1-1.svg' },
            { name: 'MySQL', icon: '/mysql-2.png' },
        ],
    },
    {
        category: 'Tools',
        items: [
            { name: 'VS Code', icon: '/vscode.svg' },
            { name: 'Git', icon: '/git-icon.svg' },
        ],
    },
    {
        category: 'Runtime Environment',
        items: [
            { name: 'Node.js', icon: '/nodejs-2.svg' },
        ],
    },
];

const SkillsSection = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold text-center mb-12">
                My Skills & Technologies
            </motion.h2>

            <div className="space-y-12">
                {skillsData.map((skillCategory, index) => (
                    <div key={index}>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">
                            {skillCategory.category}
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center">
                            {skillCategory.items.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex flex-col items-center p-4 bg-gradient-to-b from-gray-400 to-gray-700 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {/* For Next.js Image component, ensure your domain is configured in next.config.js for external images or use local SVGs */}
                                    {/* If using react-icons, render the component directly: <skill.icon size={48} className="text-blue-500" /> */}
                                    {skill.icon && (
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={60}
                                            height={40}
                                            className="mb-2"
                                        />
                                    )}
                                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200 text-center">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;