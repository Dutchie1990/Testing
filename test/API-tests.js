const supertest = require('supertest');
const chai = require('chai')

const request = supertest('https://api-pub.bitfinex.com/v2/');

describe('Platform status', () => {
    it('GET /platform/status - statuscode 200', (done) => {
        request.get('platform/status').end((err, res) => {
            chai.expect(res.statusCode).to.equal(200)
            done();
        });
    });
    it('GET /platform/status - statuscode 500', (done) => {
        request.get('platform/stat').end((err, res) => {
            chai.expect(res.statusCode).to.equal(500)
            done();
        });
    });
    it('GET /platform/status - response body', (done) => {
        request.get('platform/status').end((err, res) => {
            chai.expect(JSON.stringify(res.body)).to.equal('[1]')
            done();
        });
    });
});