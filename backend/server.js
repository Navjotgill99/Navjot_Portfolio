// Load environment variables
require('dotenv').config();

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 8888;// Set the port

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for all routes

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Handle MongoDB connection events
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});


// Define Project Schema and Model
const projectSchema = new mongoose.Schema({
    project_name: String,         // Name of the project
    project_thumbnail: String,    // URL to the project's thumbnail image
    project_url: String,          // URL to the project's live version or repository
    project_description: String,  // Short description of the project
    project_languages: [String]   // Array of programming languages or technologies used in the project
});
const Project = mongoose.model('Project', projectSchema);// Create the Project model from the schema

// Define the Skill Schema and Model
const skillSchema = new mongoose.Schema({
    skill_name: String,           // Name of the skill
    skill_icon: String            // URL or path to an icon representing the skill
});
const Skill = mongoose.model('Skill', skillSchema);// Create the Skill model from the schema

// Define the API endpoint to get the list of projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();// Fetch all projects from the database
        res.json(projects);// Return the list of projects as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error: error.message });// Handle errors
    }
});

// Define the API endpoint to get the list of skills
app.get('/api/skills', async (req, res) => {
    try {
        const skills = await Skill.find();// Fetch all skills from the database
        res.json(skills);// Return the list of skills as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skills', error: error.message });// Handle errors
    }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});