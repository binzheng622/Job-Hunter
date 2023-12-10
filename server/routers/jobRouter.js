const express = require('express');

const jobController = require('../controllers/jobController');

const router = express.Router();

//Sync data to redux store
router.get('/data', jobController.syncData, (req, res) => {
  return res.status(200).json(res.locals.syncData);
});

//Creating job in database
router.post('/data', jobController.createJob, (req, res) => {
  return res.sendStatus(200);
});

//Updating job in database
router.patch('/:id', jobController.updateStatus, (req, res) => {
  return res.sendStatus(200);
});

//Deleting job in database
router.delete('/:id', jobController.deleteJob, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;