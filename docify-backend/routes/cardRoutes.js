const express = require('express');
const Card = require('../models/Cards');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();


const authenticate = function(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Unauthorized Access" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized Access' });
    }
};


router.post('/post', authenticate, async function(req, res){
    const { title, description } = req.body;
    try {
        const card = new Card({ title, description, userId: req.userId });
        await card.save();
        res.status(201).json({
            success: true,
            message: "Card created successfully",
            card
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create card' });
    }
});


router.get('/cards', authenticate, async function(req, res){
    try {
        const cards = await Card.find({ userId: req.userId });
        res.json(cards);
    } catch(error){
        res.status(500).json({ message: 'Server Error' });
    }
});


router.delete("/delete/:id", authenticate, async function(req, res){
    try {
        await Card.deleteOne({ _id: req.params.id, userId: req.userId });
        res.json({ message: "Card Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete" });
    }
});


router.put("/edit/:id", authenticate, async function(req, res){
    const { title, description } = req.body;

    try {
        const update = await Card.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            { title, description },
            { new: true }
        );
        res.json(update);
    } catch(err){
        res.status(500).json({ message: "Failed to update" });
    }
});

module.exports = router;
