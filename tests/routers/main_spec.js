const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

describe('/', () => {
  it('returns a status code 200', () => {
    return chai.request(app)
    .get('/')
    .then((res) => {
      expect(res.status).to.equal(200);
    });
  });

  it('returns the html file', () => {
    return chai.request(app)
    .get('/')
    .then((res) => {
      expect(res).to.be.html;
    });
  });
});
