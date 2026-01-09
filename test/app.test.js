const { test } = require('node:test');
const assert = require('node:assert');
const { getGrade } = require('../src/index.js');

test('95 should be an A', () => {
    assert.strictEqual(getGrade(95), 'A');
});

test('75 should be a C', () => {
    assert.strictEqual(getGrade(75), 'C');
});

// INTENTIONAL BUG FOR DEMO:
// This test expects 'F' for 50, but let's pretend we messed up logic later.
test('50 should be an F', () => {
    assert.strictEqual(getGrade(50), 'F');
});