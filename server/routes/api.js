const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = 'mongodb://userNicolas:userNicolas@ds229909.mlab.com:29909/eventsbd';
mongoose.connect(db, err =>{
    if(err){
        console.error('ERROR!' + err);
    } else{
        console.log('Connected to MongoDB');
    };
});
router.get('/', (req, res) => {
    res.send('from API route');
});
router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error);
        }else{
            res.status(200).send(registeredUser);
        };
    });
});
router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user)=>{
        if(error){
            console.log(error);
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            }else{
                res.status(200).send(user)
            };
        };
    });
});
router.get('/events', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "2",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "3",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "4",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "5",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "6",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        }
    ];
    res.json(events);
});
router.get('/special', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "2",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "3",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "4",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "5",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        },
        {
            "_id": "6",
            "name": "JSmeet",
            "description": "lorem insup",
            "date": "2012-04-23T10:30:00.511Z"
        }
    ];
    res.json(events);
});

module.exports = router;