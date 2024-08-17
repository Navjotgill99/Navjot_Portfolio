// frontend/src/components/About.jsx
import React, { useEffect, useState } from 'react';
import '../../public/css/About.css';

function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>Hello! I’m Navjot Kaur Gill, a passionate Web Developer and Designer dedicated to creating innovative and user-friendly web applications. With a strong foundation in front-end and back-end technologies, I strive to build seamless digital experiences that help businesses thrive online. My journey in web development began with a curiosity for how things work, and it has since evolved into a commitment to continuous learning and improvement.
                I believe that great design is not just about aesthetics; it’s about solving problems and enhancing user experiences. Whether I’m crafting responsive layouts, optimizing performance, or integrating APIs, I approach each project with creativity and attention to detail. When I’m not coding, you can find me exploring new recipes, planning my next travel adventure, or enjoying the great outdoors. I’m excited to connect with like-minded individuals and collaborate on projects that make a difference! Feel free to customize this text to better reflect your personality, skills, and interests!
            </p>
            <section className="education">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>Web Development</h3>
                    <p>Humber College, Etobicoke, ON</p>
                    <p>January 2024 - Present</p>
                    <ul>
                        <li>Technologies learned: HTML, CSS, JavaScript, React, Node.js, Php, Express, MongoDB</li>
                    </ul>
                </div>
                <div className="education-item">
                    <h3>Computer Systems Technician - Networking</h3>
                    <p>Canadore College, Mississauga, ON</p>
                    <p>Graduated: August 2019</p>
                    <ul>
                        <li>Relevant coursework: Web Development, Database Management, Software Engineering</li>
                        <li>GPA: 3.8/4.0</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default About;