const expectedDataP1 = require('./expected-data.js');
const part1 = require('./part-1.js');

describe('#Part1', () => {
  it('task 1 should meet the expected data', () => {
    expect(part1.task1()).toStrictEqual(expectedDataP1.expectedTask1);
  });

  it('task 1 should have correct length', () => {
    expect(part1.task1().length).toEqual(1);
  });

  it('task 2 should meet the expected data', () => {
    expect(part1.task2()).toStrictEqual(expectedDataP1.expectedTask2);
  });

  it('task 3 should meet the expected data', () => {
    expect(part1.task3()).toStrictEqual(expectedDataP1.expectedTask3);
  });

  it('task 4 should meet the expected data', () => {
    expect(part1.task4()).toStrictEqual(expectedDataP1.expectedTask4);
  });

  /**
   * BONUS: Add additional 3 test scenarios here
   * that you think it would be helpful to test against
   * Example Usage:
   *  it('', () => {});
   * */
  // Highest Premium

  it('task 1 should return an array', () => {
    expect(Array.isArray(part1.task1())).toBe(true);
  });

  it('task 2 should contain unique IDs', () => {
    const ids = part1.task2().map(item => item.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toEqual(uniqueIds.size);
  });

  it('task 4 should not return null or undefined', () => {
    expect(part1.task4()).not.toBeNull();
    expect(part1.task4()).not.toBeUndefined();
  });
});
