import express, { Request, Response } from 'express';
import jobController from '../controllers/jobController.js';

const router = express.Router();

//Sync data to redux store
router.get('/data', jobController.syncData, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.syncData);
});

//Create job in database
router.post('/data', jobController.createJob, (req: Request, res: Response) => {
  return res.sendStatus(200);
});

//Update job in database
router.patch(
  '/:id',
  jobController.updateStatus,
  (req: Request, res: Response) => {
    return res.sendStatus(200);
  }
);

//Delete job in database
router.delete(
  '/:id',
  jobController.deleteJob,
  (req: Request, res: Response) => {
    return res.sendStatus(200);
  }
);

export default router;
