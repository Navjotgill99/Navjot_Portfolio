import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/Home.css'; // Import the CSS file
import profileImage from '../assets/Navjot.jpg';
import Projects from './Projects';
import Skills from './Skills';


function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-image">
                    <img src={profileImage} alt="Navjot ProfilePhoto" />
                </div>
                <div className="hero-text">
                    <h1>Navjot Kaur Gill</h1>
                    <p>Web Developer & Designer</p>
                    <p>I create custom websites to help businesses do better online.</p>
                    <Link to="/contact" className="hire-button">Hire Me</Link>
                </div>
            </section>
            <section className="about-section">
                <h2>About Me</h2>
                <div className="aboutcontent">
                    <p>Hello! I’m Navjot Kaur Gill, a passionate Web Developer and Designer dedicated to creating innovative and user-friendly web applications. With a strong foundation in front-end and back-end technologies, I strive to build seamless digital experiences that help businesses thrive online. My journey in web development began with a curiosity for how things work, and it has since evolved into a commitment to continuous learning and improvement.</p>
                </div>
                <Link to="/about" className="see-more">Learn More</Link>
            </section>

            <section className="featured-projects">
                <h2>Featured Projects</h2>
                <div className="project-grid">
                    <Projects limit={2} showHeading={false} />{/* Display only 3 projects */}
                </div>
                <Link to="/projects" className="see-more">See More Projects</Link>
            </section>

            <section className="skills-section">
                <h2>Featured Skills</h2>
                <ul className="skills-list">
                    <Skills limit={3} showHeading={false} />
                </ul>
                <Link to="/skills" className="see-more">See All Skills</Link>
            </section>

        </div>
    );
}

export default Home;