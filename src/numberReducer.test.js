'use strict';

const numberReducer = require('./numberReducer');

test('reducer should increase the number (0 => 1)', () => {
  expect(numberReducer({ type: 'increase' }))
    .toBe(1);
});

test('reducer should decrease the number (-1 => -2)', () => {
  expect(numberReducer(-1, { type: 'decrease' }))
    .toBe(-2);
});

test('reducer should clear the number (0 => 0)', () => {
  expect(numberReducer(0, { type: 'clear' }))
    .toBe(0);
});

test('reducer should clear the number (10 => 0)', () => {
  expect(numberReducer(7, { type: 'clear' }))
    .toBe(0);
});

test('reducer should return actual number', () => {
  expect(numberReducer(10, { type: 'unknown' }))
    .toBe(10);
});
