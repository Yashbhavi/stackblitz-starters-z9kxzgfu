/***** TASK 1*****/
/**
 * The following class represents a simplified version of one we
 * use frequently in different parts of our codebase. We use it
 * to encapsulate price data so we don't have to pass the raw
 * data around whenever we need it. Instead of saving the total
 * price, we save the small parts of it so that we can refer to
 * that information if we have to (total price = premium + fee).
 */
class Price {
  constructor({ premium = 0, fee =0} = {}) {
    this.premium = premium
    this.fee = fee
  }

  add(...prices) {
    return prices.reduce(
      (acc, price) => {
        acc.premium += price.premium
        acc.fee += price.fee
        return acc
      }, {premium: this.premium, fee: this.fee}
    )
  }
}

/**
 * Right now this function doesn't work because the Price class
 * is not implemented. Your task is to update the class so that
 * the following code produces the correct result as held by the
 * `result` constant.
 *
 * Note that the `.add()` function can take any number of
 * arguments, not just 2 as used here.
 */
function task1() {
  const priceA = new Price({
    premium: 100,
    fee: 10,
  });
  const priceB = new Price({
    premium: 120,
    fee: 15,
  });
  const priceC = new Price({
    premium: 80,
    fee: 20,
  });

  const result = priceA.add(priceB, priceC);

  // result should have a premium of 300 and a fee of 45
  return result;
}

console.log("TASK 1",task1());

/***** TASK 2 *****/

/**
 * Requirements have now changed and we now need to allow prices
 * to be composed of sub prices.
 */
class NestedPrice extends Price {
  /**
   * The argument `prices` should be an array of instances of
   * the class Price or NestedPrice.
   */
  constructor(prices) {
    const total = prices.reduce(
      (acc, price) => {
        const {premium, fee} = price instanceof NestedPrice ? price.getPriceDetailN() : price
        acc.premium += premium
        acc.fee += fee
        return acc
      }, {premium: 0, fee: 0}
    )
    super(total)
    this.prices = prices
  }
  getPriceDetailN() {
    return {premium: this.premium, fee: this.fee}
  }
}

/**
 * Your task is to implement `NestedClass` so that the
 * following code also produces the correct results without
 * affecting `Price` (i.e.: both classes need to work on their
 * own).
 */
function task2() {
  const priceA = new NestedPrice([
    new Price({ fee: 5, premium: 50 }),
    new Price({ fee: 10, premium: 130 }),
  ]);

  priceA.getPriceDetailN();
  const priceB = new NestedPrice([
    new Price({ fee: 10, premium: 70 }),
    new Price({ fee: 0, premium: 30 }),
    new NestedPrice([
      new Price({ fee: 0, premium: 10 }),
      new Price({ fee: 5, premium: 25 }),
    ]),
  ]);

  const result = priceA.add(priceB);

  // result should have a premium of 315 and a fee of 30
  return result;
}

console.log("TASK 2",task2());

// Export for Tak1 and Task2 Functions
module.exports = { task1, task2 };
