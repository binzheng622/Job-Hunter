import { Request, Response, NextFunction } from 'express';
import { Job } from '../models/jobModel.js';
import { jobControllerType, jobAppType, syncDataType } from '../../types';

const jobController: jobControllerType = {
  //create job app in database
  createJob: async (req: Request, res: Response, next: NextFunction) => {
    const { dateApplied, company, title, status, salary, link }: jobAppType =
      req.body;
    try {
      if (
        dateApplied.length &&
        company.length &&
        title.length &&
        status.length
      ) {
        const newJob = await Job.create({
          dateApplied,
          company,
          title,
          status,
          salary,
          link,
        });

        return next();
      } else {
        return next({
          log: 'Error in the jobController.createJob',
          message: { err: 'Error in creating new job application' },
          status: 400,
        });
      }
    } catch (error) {
      return next({
        log: `Error in the jobController.createJob: ${error}`,
        message: { err: 'Error in creating new job application' },
        status: 500,
      });
    }
  },

  //update status of job app in database
  updateStatus: async (req: Request, res: Response, next: NextFunction) => {
    const jobId: string = req.params.id;
    const { status }: { status: string } = req.body;
    try {
      if (status.length) {
        const updatedJob = await Job.updateOne({ _id: jobId }, { status });

        return next();
      } else {
        return next({
          log: 'Error in the jobController.updateStatus',
          message: { err: 'Error occured in updating status' },
          status: 400,
        });
      }
    } catch (error) {
      return next({
        log: `Error in the jobController.updateStatus: ${error}`,
        message: { err: 'Error occured in updating status' },
        status: 500,
      });
    }
  },

  //delete job app from database
  deleteJob: async (req: Request, res: Response, next: NextFunction) => {
    const jobId: string = req.params.id;
    try {
      const deletedJob = await Job.deleteOne({ _id: jobId });

      return next();
    } catch (error) {
      return next({
        log: `Error in the jobController.deleteJob: ${error}`,
        message: { err: 'Error occured in deleting job' },
        status: 500,
      });
    }
  },

  //update redux store with current data
  syncData: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allInterested: jobAppType[] = await Job.find({
        status: 'Interested',
      });
      const allApplied: jobAppType[] = await Job.find({ status: 'Applied' });
      const allnterviewed: jobAppType[] = await Job.find({
        status: 'Interviewed',
      });
      const allFollowedup: jobAppType[] = await Job.find({
        status: 'FollowedUp',
      });
      const allAccepted: jobAppType[] = await Job.find({ status: 'Accepted' });
      const allRejected: jobAppType[] = await Job.find({ status: 'Rejected' });

      let syncObject: syncDataType = {
        Interested: allInterested,
        Applied: allApplied,
        Interviewed: allnterviewed,
        FollowedUp: allFollowedup,
        Accepted: allAccepted,
        Rejected: allRejected,
      };

      res.locals.syncData = syncObject;

      return next();
    } catch (error) {
      return next({
        log: `Error in the jobController.syncData: ${error}`,
        message: { err: 'Error occured in syncing' },
        status: 500,
      });
    }
  },
};

export default jobController;
