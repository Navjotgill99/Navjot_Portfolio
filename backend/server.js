// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


// Define Project Schema and Model
const projectSchema = new mongoose.Schema({
  project_name: String,
  project_thumbnail: String,
  project_url: String,
  project_description: String,
  project_languages: [String]
});
const Project = mongoose.model('Project', projectSchema);


const skillSchema = new mongoose.Schema({
  skill_name: String,
  skill_icon: String
});
const Skill = mongoose.model('Skill', skillSchema);


app.get('/api/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching projects', error: error.message });
    }
  });

app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error: error.message });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });