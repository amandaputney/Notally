const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//All paths start with '/api/users' because router is mounted
// Create a new note
router.post('/notes', async (req, res) => {
  try {
    const newNote = new Note(req.body);
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single note
router.get('/notes/:id', async (req, res) => {
  // Implement code to retrieve an note by ID
});

// Update a note
router.put('/notes/:id', async (req, res) => {
  // Implement code to update an note by ID
});

// Delete a note
router.delete('/notes/:id', async (req, res) => {
  // Implement code to delete an note by ID
});

module.exports = router;