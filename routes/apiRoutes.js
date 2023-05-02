const express = require('express');
const router = express.Router();
const db = require('../db/dbClass');
const uuid = require('uuid');

const db = require('../db/databaseClass');
const notes = require('../db/db.json');

router.get('/api/notes', async function (req, res) {
    const notes = await db.readNotes();
    res.json(notes);
});

router.post('/api/notes', async function (req, res) {
    const existingNotes = await db.readNotes();
    let newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
    };

    await db.addNote([...existingNotes, newNote]);

    return res.send(newNote);
});