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

describe('Foreing exchange rate', () => {
    it('POST calc/fx - 200', (done) => {
        request.post('calc/fx').send({
            ccy1: 'BTC',
            ccy2: 'EUR'
        }).end((err, res) => {
            chai.expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it('POST calc/fx - 500', (done) => {
        request.post('calc/fx').send({
            ccy1: 'BT',
            ccy2: 'EUR'
        }).end((err, res) => {
            chai.expect(res.statusCode).to.equal(500);
            done();
        });
    });
});