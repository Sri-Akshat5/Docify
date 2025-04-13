const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Card = require('../models/Cards');
const axios = require('axios');
require('dotenv').config();

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

router.post('/generate', authenticate, async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ message: "Prompt required" });

   
    if (!process.env.OPENROUTER_API_KEY) {
        return res.status(500).json({ message: "OpenRouter API key not configured" });
    }

    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: "mistralai/mistral-7b-instruct:free",
                messages: [{ role: "user", content: prompt }]
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                   
                },
                timeout: 10000 
            }
        );

       
        if (!response.data?.choices?.[0]?.message?.content) {
            console.error('Unexpected API response:', response.data);
            return res.status(500).json({ 
                message: "Unexpected response from AI service",
                details: response.data 
            });
        }

        const text = response.data.choices[0].message.content;
        const title = prompt.substring(0, 50); 

        const newCard = await Card.create({
            title,
            description: text,
            userId: req.userId
        });

        res.status(201).json(newCard);

    } catch (err) {
        console.error("AI Generation Error:", err.response?.data || err.message);
        
       
        let errorMessage = "AI generation failed";
        if (err.response) {
            errorMessage = `AI service error: ${err.response.status} - ${err.response.statusText}`;
        } else if (err.request) {
            errorMessage = "No response received from AI service";
        }

        res.status(500).json({ 
            message: errorMessage,
            details: err.response?.data || null 
        });
    }
});

module.exports = router;