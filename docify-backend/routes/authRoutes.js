const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async function(req, res){
    const {name, email, password} = req.body;

    try{
        const userExist = await User.findOne({email});
        if(userExist) {
            return res.status(400).json({error: "User already exist, Try login"});
        }
        const salt = await bcrypt.genSalt(10);
        
        const hashPass = await bcrypt.hash(password, salt);


        const user = new User({ name, email, password: hashPass});
        await user.save();

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);

        res.status(201).json({message: " User Registerd successfully", token});
    } catch (error) {
        res.status(500).json({error: "Server Error"});
    }
    
});

router.post('/login', async function(req, res){
    const { email, password } = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error: 'Invalid Credentials'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({error: 'Invalid Credentials'});

        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET);
       
        res.json({message: 'Login successfully', token});
    } catch (error){
        res.status(500).json({error:'Server Error'});
    }
    
});

router.get('/account', async function(req, res){
   
    const token = req.headers.authorization?.split(" ")[1];
    try{
        if(!token) return res.status(400).json({error: 'Please Login...'});
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decode.userId);
        res.json({
            success: true,
            message: "Account updated successfully",
            name: user.name,
            email: user.email
        });
    } catch(error){
        res.status(500).json({error: "Token verification failed or internal server error"});
    }
});

module.exports = router;