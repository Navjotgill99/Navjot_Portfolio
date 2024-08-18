import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../public/css/Projects.css';

function Projects({ limit, showHeading = true }) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:8888/api/projects'); // Adjust the URL to match your backend API
            console.log('Response data:', response.data); // Add this line for debugging
            setProjects(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching projects:', err); // Add this line for debugging
            setError('Error fetching projects. Please try again later.');
            setLoading(false);
        }
    };

    if (loading) return <div>Loading projects...</div>;
    if (error) return <div>{error}</div>;

    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="projects" className="projects">
            {showHeading && <h2>My Projects</h2>}
            {displayedProjects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                <div className="projects-grid">
                    {displayedProjects.map((project) => (
                        <div key={project._id} className="project-card">
                            <img src={project.project_thumbnail} alt={project.project_name} />
                            <h3>{project.project_name}</h3>
                            <p>{project.project_description}</p>
                            <div className="project-languages">
                                {project.project_languages.map((lang, index) => (
                                    <span key={index} className="language-tag">{lang}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <button
                                    onClick={() => window.open(project.project_url, '_blank', 'noopener,noreferrer')}
                                    className="view-project-btn">View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Projects;