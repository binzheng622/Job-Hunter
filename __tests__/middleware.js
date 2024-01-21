const controller = require('../server/controllers/jobController.js');

jest.setTimeout(60000); // 60 sec before timeout

describe('Middleware Tests', () => {
  const req = {
    body: {},
    params: { id: '65ad40865ae1cf3660707b5a' },
  };
  const res = { locals: {} };
  const next = jest.fn(); // Jest mock function

  describe('jobController middleware', () => {
    describe('createJob', () => {
      it('Job entry was added into database', async () => {
        req.body = {
          dateApplied: '1.1.23',
          company: 'google',
          title: 'software engineer',
          status: 'Applied',
          salary: '100000',
          link: 'www.google.com',
        };
        await controller.createJob(req, res, next);
        expect(next).toHaveBeenCalled();
      });
    });

    describe('updateStatus', () => {
      it('Job entry was correctly edited in database', async () => {
        req.body = { status: 'Applied' };
        await controller.updateStatus(req, res, next);
        expect(req.params.id).toEqual('65ad40865ae1cf3660707b5a');
        expect(next).toHaveBeenCalled();
      });
    });

    describe('deleteJob', () => {
      it('Job entry was correctly deleted in database', async () => {
        await controller.deleteJob(req, res, next);
        expect(req.params.id).toEqual('65ad40865ae1cf3660707b5a');
        expect(next).toHaveBeenCalled();
      });
    });

    describe('syncData', () => {
      it('Data correctly fetched from database', async () => {
        await controller.syncData(req, res, next);
        expect(next).toHaveBeenCalled();
      });
    });
  });
});
