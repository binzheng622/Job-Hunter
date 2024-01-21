import { RequestHandler } from 'express';

export interface ServerError {
  log: string;
  status: number;
  message: { err: string };
}

export interface jobControllerType {
  createJob: RequestHandler;
  updateStatus: RequestHandler;
  deleteJob: RequestHandler;
  syncData: RequestHandler;
}

export interface jobAppType {
  dateApplied: string;
  company: string;
  title: string;
  status: String;
  salary: String;
  link: String;
}

export interface syncDataType {
  Interested: jobAppType[];
  Applied: jobAppType[];
  Interviewed: jobAppType[];
  FollowedUp: jobAppType[];
  Accepted: jobAppType[];
  Rejected: jobAppType[];
}
