import request from 'supertest';
const server = 'http://localhost:3000';

describe('Server Endpoints', () => {
  //test response from unknown endpoint
  describe('/unknown', () => {
    describe('GET', () => {
      it('responds with 404 status', () => {
        return request(server)
          .get('/unknown')
          .expect('Content-Type', /text\/html/)
          .expect(404)
          .expect((res) => {
            if (!res.text.includes('Page Not Found')) {
              throw new Error(
                'Expected response body to contain: "Page Not Found"'
              );
            }
          });
      });
    });
  });

  //test response from fetch state data endpoint
  describe('/api/data', () => {
    describe('GET', () => {
      it('responds with 200 status and JSON content type', () => {
        return request(server)
          .get('/api/data')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });

    describe('POST', () => {
      it('responds with 200 status', () => {
        return request(server)
          .post('/api/data')
          .send({
            dateApplied: '1.1.23',
            company: 'google',
            title: 'software engineer',
            status: 'Applied',
            salary: '100000',
            link: 'www.google.com',
          })
          .expect(200);
      });
    });
  });

  //test response from fetch state id endpoint
  describe('/api/:id', () => {
    describe('PATCH', () => {
      it('responds with 200 status', () => {
        return request(server)
          .patch('/api/65ad40865ae1cf3660707b5a')
          .send({
            status: 'Applied',
          })
          .expect(200);
      });
    });

    describe('DELETE', () => {
      it('responds with 200 status', () => {
        return request(server)
          .delete('/api/65ad40865ae1cf3660707b5a')
          .expect(200);
      });
    });
  });
});
