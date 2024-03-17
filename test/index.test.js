// test_csrfMiddleware.js

const assert = require('assert');
const csrfMiddleware = require('../src/csrfMiddleware');

describe('CSRF Protection Middleware Test', function () {
    it('should generate and store CSRF token in session', function () {
        const req = { session: {} };
        const res = {};
        const next = function () {};

        csrfMiddleware(req, res, next);

        assert(req.session.csrfToken, 'CSRF token should be generated and stored in session');
    });
});
