const mongoose = require('mongoose');
const User = mongoose.model('User');
const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
    res.send('This is a GET request router for users.')
})

userRouter.post('/', (req, res) => {
    const auth = req.currentUser;
    if (auth) {
        const user = new User({ uid: req.body.userId, email: req.body.email, username: req.body.username });
        const savedUser = user.save();
        return res.status(201).json(savedUser);
    }
    return res.status(403).send('Not authorized');
})

module.exports = userRouter;