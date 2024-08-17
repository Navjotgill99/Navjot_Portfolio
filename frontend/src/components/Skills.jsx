// frontend/src/components/Skills.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../public/css/Skills.css';

function Skills({ limit, showHeading = true }) {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const response = await axios.get('http://localhost:8888/api/skills');
            console.log('Skills data:', response.data); // For debugging
            setSkills(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching skills:', err);
            setError('Error fetching skills. Please try again later.');
            setLoading(false);
        }
    };

    if (loading) return <div>Loading skills...</div>;
    if (error) return <div>{error}</div>;

    const displayedSkills = limit ? skills.slice(0, limit) : skills;

    
    return (
        <section id="skills" className="skills">
            {showHeading && <h2>My Skills</h2>}
            {displayedSkills.length === 0 ? (
                <p>No skills found.</p>
            ) : (
                <div className="skills-grid">
                    {displayedSkills.map((skill) => (
                        <div key={skill._id} className="skill-card">
                            <img src={skill.skill_icon} alt={skill.skill_name} />
                            <h3>{skill.skill_name}</h3>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Skills;