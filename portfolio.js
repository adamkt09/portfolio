import React from 'react';

const skills = [
    {
        title: 'HTML',
        description: '2 years of experience'
    },
    {
        title: 'CSS',
        description: '1 year of experience'
    },
    {
        title: 'JavaScript',
        description: '1 year of experience'
    },
    {
        title: 'React.js',
        description: '1 year of experience'
    },
    {
        title: 'VS Code',
        description: '2 years of experience'
    },
    {
        title: 'GitHub',
        description: '2 years of experience',
        link: 'https://github.com/adamkt09'
    }
];

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                        {skill.link && (
                            <a href={skill.link} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
