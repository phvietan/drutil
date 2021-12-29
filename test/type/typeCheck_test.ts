import chai from 'chai';
import {isArray, isNumber, isObject, isString} from '../../src/type/typeCheck';

const assert = chai.assert;

describe('Test isArray', () => {
  it('should return true if input is array', () => {
    assert(isArray(new Array(10)));
    assert([1, 2, 3]);
  });
  it('should return false if input is not array', () => {
    assert(!isArray(1));
    assert(!isArray('1'));
    assert(!isArray(/a/));
    assert(!isArray({}));
    assert(!isArray(null));
    assert(!isArray(undefined));
    assert(!isArray(NaN));
  });
});

describe('Test isNumber', () => {
  it('should return true if input is number', () => {
    assert(isNumber(1));
    assert(isNumber(Infinity));
    assert(isNumber(NaN)); // Weird but it is like that xD
  });
  it('should return false if input is not number', () => {
    assert(!isNumber('1'));
    assert(!isNumber([]));
    assert(!isNumber(new Array(1)));
    assert(!isNumber(/a/));
    assert(!isNumber({}));
    assert(!isNumber(null));
    assert(!isNumber(undefined));
  });
});

describe('Test isString', () => {
  it('should return true if input is string', () => {
    assert(isString('1'));
    assert(isString(String('1')));
  });
  it('should return false if input is not string', () => {
    assert(!isString(1));
    assert(!isString([]));
    assert(!isString(new Array(1)));
    assert(!isString(/a/));
    assert(!isString({}));
    assert(!isString(null));
    assert(!isString(undefined));
  });
});

describe('Test isObject', () => {
  it('should return true if input is object', () => {
    assert(isObject({}));
    assert(isObject(/a/)); // Special object
  });
  it('should return false if input is not object', () => {
    assert(!isObject(1));
    assert(!isObject([]));
    assert(!isObject(new Array(1)));
    assert(!isObject(null));
    assert(!isObject(undefined));
  });
});
