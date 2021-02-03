const mongoose = require('mongoose');
const Token = mongoose.model('Token');

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send('Insufficient data to create a new token');
  }
  const auth = req.currentUser;
  if (auth) {
    const token = Token.create({
      userId: req.body.userId, 
      accessToken: req.body.accessToken 
    });
    return res.status(201).json({'status': '201'});
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};

exports.findOne = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({'status': '400', 'message': 'Insufficient data to search for token'});
  }
  const auth = req.currentUser;
  if (auth) {
    const id = req.params.id;
    const tokenRes = await Token.find({ userId: id })

    if (tokenRes.length > 0) {
      return res.status(200).json(tokenRes[0].accessToken);
    } else {
      return res.status(200).send(false);
    }
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};

exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({'status': '400', 'message': 'Insufficient data to update token'});
  }
  const auth = req.currentUser;

  if (auth) {
    const id = req.params.id;
    const updateRes = await Token.findOneAndUpdate({ userId: id}, req.body, { useFindAndModify: false })

    if (!updateRes) {
      return res.status(404).send({'status': '404', 'message': `Unable to update token with id=${id}.`});
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
    const deleteRes = await Token.findOneAndDelete({ userId: id})
    if (!deleteRes) {
      return res.status(404).send({'status': '404', 'message': `Unable to delete token with id=${id}.`});
    } else {
      return res.status(200).send({'status': '200', 'message': 'Deleted successfully'});
    }
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};