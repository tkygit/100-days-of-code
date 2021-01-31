const mongoose = require('mongoose');
const Commit = mongoose.model('Commit');

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send('Insufficient data to create a commit');
  }
  const auth = req.currentUser;
  if (auth) {
    const commit = Commit.create({
      commitId: req.body.commitId, 
      userId: req.body.userId, 
      commitDate: req.body.commitDate,
      repoName: req.body.repoName,
      repoUrl: req.body.repoUrl,
      commitMessage: req.body.commitMessage,
      commitUrl: req.body.commitUrl,
     });
    return res.status(201).json({'status': '201'});
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};

exports.findAll = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({'status': '400', 'message': 'Insufficient data to find commits'});
  }
  const auth = req.currentUser;
  if (auth) {
    const userId = req.params.id;
    const commitRes = await Commit.find({ userId: userId })

    if (commitRes.length > 0) {
      return res.status(200).json(commitRes);
    } else {
      return res.status(200).send(null);
    }
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};

exports.deleteAll = async (req, res) => {
  const auth = req.currentUser;

  if (auth) {
    const id = req.params.id;
    const deleteRes = await Commit.deleteMany({ userId: id})
    if (!deleteRes) {
      return res.status(404).send({'status': '404', 'message': `Unable to delete user with id=${id}.`});
    } else {
      return res.status(200).send({'status': '200', 'message': 'Deleted successfully'});
    }
  }
  return res.status(403).send({'status': '403', 'message': 'Not authorized'});
};