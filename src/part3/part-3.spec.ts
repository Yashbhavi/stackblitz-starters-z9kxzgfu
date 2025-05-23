import { task1, task2, task3, task4, Price } from './part-3';

describe('#Part3', () => {
  it('task 1 should meet the expected data', () => {
    expect(task1()).toStrictEqual({
      priceResult: { highestPrice: 120, lowestPrice: 100 },
    });
  });

  it('task 2 should meet the expected data', () => {
    expect(task2()).toStrictEqual({
      priceResult: { lowestPrice: 100, highestPrice: 120 },
      possiblePrices: [
        new Price({ fee: 10, premium: 100, industry: 'food' }),
        new Price({ fee: 15, premium: 120, industry: 'food' }),
      ],
    });
  });

  it('task 3 should meet the expected data', () => {
    expect(task3()).toStrictEqual({
      priceResult: { description: 'No price selected' },
    });
  });

  it('task 4 should meet the expected data', () => {
    expect(task4()).toStrictEqual({
      priceResult: { description: 'No price selected' },
      possiblePrices: [
        new Price({ fee: 10, premium: 100, industry: 'food' }),
        new Price({ fee: 15, premium: 120, industry: 'food' }),
      ],
    });
  });

  /**
   * BONUS: Add additional test scenarios here
   * that you think it would be helpful to test against
   * Example Usage:
   *  it('', () => {});
   * */

  it('task 1 priceResult should contain highestPrice and lowestPrice', () => {
    const result = task1().priceResult;
    expect(result).toHaveProperty('highestPrice');
    expect(result).toHaveProperty('lowestPrice');
  });
  
  it('task 3 priceResult should contain a description field', () => {
    const result = task3().priceResult;
    expect(result).toHaveProperty('description');
    expect(typeof result.description).toBe('string');
  });
  
  it('task 2 possiblePrices should be an array', () => {
    expect(Array.isArray(task2().possiblePrices)).toBe(true);
  });
  
  it('task 4 possiblePrices should be an array', () => {
    expect(Array.isArray(task4().possiblePrices)).toBe(true);
  });
  
});
