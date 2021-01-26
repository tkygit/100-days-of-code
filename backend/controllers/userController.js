const mongoose = require('mongoose');
const User = mongoose.model('User');
const userRouter = require('express').Router();

userRouter.get('/', async (req, res) => {
    const auth = req.currentUser;
    if (auth) {
        const userRes = await User.find({ userId: req.query.userId })

        if (userRes.length > 0) {
            return res.status(200).json(userRes[0]);
        } else {
            return res.status(200).send(false);
        }
    }
    return res.status(403).send('Not authorized');
})

userRouter.post('/', (req, res) => {
    const auth = req.currentUser;
    if (auth) {
        const user = new User({ userId: req.body.userId, email: req.body.email, username: req.body.username });
        user.save();
        return res.status(201).json(user);
    }
    return res.status(403).send('Not authorized');
})

module.exports = userRouter;