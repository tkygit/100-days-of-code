const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send('Insufficient data to create a new user');
  }
  const auth = req.currentUser;
  if (auth) {
    const userPayload = {
      userId: req.body.userId, 
      email: req.body.email, 
      username: req.body.username
    }
    const user = User.create(userPayload);
    return res.status(201).json(userPayload);
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};

exports.findOne = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({'status': '400', 'message': 'Insufficient data to search for user'});
  }
  const auth = req.currentUser;
  if (auth) {
    const id = req.params.id;
    const userRes = await User.find({ userId: id })

    if (userRes.length > 0) {
      return res.status(200).json(userRes[0]);
    } else {
      return res.status(200).send(false);
    }
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};

exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({'status': '400', 'message': 'Insufficient data to update user'});
  }
  const auth = req.currentUser;

  if (auth) {
    const id = req.params.id;
    const updateRes = await User.findOneAndUpdate({ userId: id}, req.body, { useFindAndModify: false })

    if (!updateRes) {
      return res.status(404).send({'status': '404', 'message': `Unable to update user with id=${id}.`});
    } else {
      return res.status(200).send({'status': '200', 'message': 'Updated successfully'});
    }
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};

exports.delete = async (req, res) => {
  const auth = req.currentUser;

  if (auth) {
    const id = req.params.id;
    const deleteRes = await User.findOneAndDelete({ userId: id})
    if (!deleteRes) {
      return res.status(404).send({'status': '404', 'message': `Unable to delete user with id=${id}.`});
    } else {
      return res.status(200).send({'status': '200', 'message': 'Deleted successfully'});
    }
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};