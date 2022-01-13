import chai from 'chai';
import { formatDate, getNumDaysDifference } from '../../src/date/dateUtil';

const assert = chai.assert;

describe('Test formatDate', () => {
  it('should return correct format', () => {
    const time = '2021-12-26T06:29:33.387Z';
    const date = new Date(time);
    const formatted = formatDate(date);
    assert(formatted.slice(0, 10) === '26-12-2021');
  });
});

describe('Test getNumDaysDifference', () => {
  it('should correctly get number of days difference', () => {
    const timeA = '2021-12-26T06:29:33.387Z';
    const timeB = '2021-12-26T06:29:33.387Z';
    const dateA = new Date(timeA);
    const dateB = new Date(timeB);
    const difference = getNumDaysDifference(dateA, dateB);
    assert(difference === 0);
  });

  it('should correctly get number of days difference', () => {
    const timeA = '2021-12-26T06:29:33.387Z';
    const timeB = '2021-12-20T06:29:33.387Z';
    const dateA = new Date(timeA);
    const dateB = new Date(timeB);
    const difference = getNumDaysDifference(dateA, dateB);
    assert(difference === 6);
  });
});
