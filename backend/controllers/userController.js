const mongoose = require('mongoose');
const User = mongoose.model('User');
const userRouter = require('express').Router();

userRouter.get('/', async (req, res) => {
    const auth = req.currentUser;
    if (auth) {
        const userRes = await User.find({ uid: req.query.uid })

        if (userRes.length > 0) {
            return res.status(200).send(true);
        } else {
            return res.status(200).send(false);
        }
    }
    return res.status(403).send('Not authorized');
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