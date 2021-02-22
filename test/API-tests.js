const supertest = require('supertest');
const chai = require('chai')

const request = supertest('https://api-pub.bitfinex.com/v2/');

describe('Platform status', () => {
    it('GET /platform/status - 200', (done) => {
        request.get('platform/status').end((err, res) => {
            chai.expect(res.statusCode).to.equal(200)
            done();
        });
    });
});