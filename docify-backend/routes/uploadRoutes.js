const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const Card = require('../models/Cards');
const router = express.Router();
const jwt = require('jsonwebtoken');

const storage = multer.memoryStorage();
const upload = multer({ storage });


const authenticate = function(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized Access' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized Access' });
  }
};


router.post('/upload', authenticate, upload.single('file'), async function(req, res) {
  const file = req.file;
  const ext = file.originalname.split('.').pop().toLowerCase();

  let text = '';

  try {
    if (ext === 'pdf') {
      const data = await pdfParse(file.buffer);
      text = data.text;
    } else if (ext === 'docx') {
      const data = await mammoth.extractRawText({ buffer: file.buffer });
      text = data.value;
    } else {
      return res.status(400).json({ message: 'Unsupported file type' });
    }

    const title = text.split(' ').slice(0, 3).join(' ');
    const newCard = await Card.create({ title, description: text, userId: req.userId });

    res.status(201).json(newCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error processing file' });
  }
});

module.exports = router;
