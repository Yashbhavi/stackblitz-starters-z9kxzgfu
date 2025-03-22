const { task1, task2 } = require('./part-2');

describe('#Part2', () => {
  it('task 1 should meet the expected data', () => {
    expect(task1()).toStrictEqual({ premium: 300, fee: 45 });
  });

  it('task 2 should meet the expected data', () => {
    expect(task2()).toStrictEqual({ premium: 315, fee: 30 });
  });

  /**
   * BONUS: Add additional test scenarios here
   * that you think it would be helpful to test against
   * Example Usage:
   *  it('', () => {});
   * */
  it('task 1 should have numerical premium and fee', () => {
    const result = task1();
    expect(typeof result.premium).toBe('number');
    expect(typeof result.fee).toBe('number');
  });
  
  it('task 2 should have numerical premium and fee', () => {
    const result = task2();
    expect(typeof result.premium).toBe('number');
    expect(typeof result.fee).toBe('number');
  });

  it('task 1 should contain both premium and fee fields', () => {
    const result = task1();
    expect(result).toHaveProperty('premium');
    expect(result).toHaveProperty('fee');
  });
  
  it('task 2 should contain both premium and fee fields', () => {
    const result = task2();
    expect(result).toHaveProperty('premium');
    expect(result).toHaveProperty('fee');
  });
  
  it('task 1 should not return null or undefined', () => {
    expect(task1()).not.toBeNull();
    expect(task1()).not.toBeUndefined();
  });
  
  it('task 2 should not return null or undefined', () => {
    expect(task2()).not.toBeNull();
    expect(task2()).not.toBeUndefined();
  });

});
