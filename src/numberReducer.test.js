'use strict';

const numberReducer = require('./numberReducer');

// increase tests
test('reducer should increase the number (0 => 1)', () => {
  expect(numberReducer(0, { type: 'increase' }))
    .toBe(1);
});

test('reducer should increase the number (10 => 11)', () => {
  expect(numberReducer(10, { type: 'increase' }))
    .toBe(11);
});

test('reducer should increase the number (-1 => 0)', () => {
  expect(numberReducer(-1, { type: 'increase' }))
    .toBe(0);
});

// decrease tests
test('reducer should decrease the number (0 => -1)', () => {
  expect(numberReducer(0, { type: 'decrease' }))
    .toBe(-1);
});

test('reducer should decrease the number (10 => 9)', () => {
  expect(numberReducer(10, { type: 'decrease' }))
    .toBe(9);
});

test('reducer should decrease the number (-1 => -2)', () => {
  expect(numberReducer(-1, { type: 'decrease' }))
    .toBe(-2);
});

// clear tests
test('reducer should clear the number (0 => 0)', () => {
  expect(numberReducer(0, { type: 'clear' }))
    .toBe(0);
});

test('reducer should clear the number (10 => 0)', () => {
  expect(numberReducer(10, { type: 'clear' }))
    .toBe(0);
});

test('reducer should clear the number (-1 => 0)', () => {
  expect(numberReducer(-1, { type: 'clear' }))
    .toBe(0);
});

// other tests
test('reducer should return actual number', () => {
  expect(numberReducer(0, { type: 'unknown' }))
    .toBe(0);
});

test('reducer should return actual number', () => {
  expect(numberReducer(10, { type: 'qweqwe' }))
    .toBe(10);
});

test('reducer should return actual number', () => {
  expect(numberReducer(-1, { type: 'sdfsdf' }))
    .toBe(-1);
});
