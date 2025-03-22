/**
 * Refer to the following data when completing your answers: (The following JSON
 * file contains providers available for an industry)
 */

const PROVIDERS = require('../shared/data.json');

/**
 * Create a query that returns total premiums and fees available for retail industry
 */
function task1() {
  /**
   * TODO: Your body goes here
   */
  const result = PROVIDERS.filter(p => p.industry === 'retail').reduce((acc,provider) => {
    provider.prices.forEach(price => {
      acc.totalPremium += price.premium || 0
      acc.totalFees += price.fee? Number(price.fee) : 0
    })
    return acc
  },{ totalPremium: 0, totalFees: 0})
  return [result]
}

/**
 * Create a query that returns the minimum premium available among the providers for technology industry
 */
function task2() {
  /**
   * TODO: Your body goes here
   */

  const minPremium = Math.min(
    ...PROVIDERS.filter(p => p.industry === 'technology').flatMap(p => p.prices.map(price => price.premium))
    .filter(premium => premium !==null & premium !== undefined)
  )

  return [{totalPremium: minPremium}]
}

/**
 * Create a query that returns all the provider names available for the technology industry
 * that has a premium amount greater than or equal to 1000
 */
function task3() {
  /**
   * TODO: Your body goes here
   */

  return PROVIDERS.filter(p => p.industry === 'technology' && p.prices.some(price => price.premium >= 1000)).map(p => p.name)
}

/**
 * Create a query that returns  provider's name and industry who has the highest premium price
 */

function task4() {
  /**
   * TODO: Your body goes here
   */

  let highestProvider = PROVIDERS.reduce((highest, provider) => {
    provider.prices.forEach(price => {
      if(price.premium > highest.premium) {
        highest.premium = price.premium
        highest.name = provider.name
        highest.industry = provider.industry
      }
    })
    return highest
  }, {name: ' ', industry: ' ', premium: - Infinity })
  return [{name: highestProvider.name, industry: highestProvider.industry}]
}

/**
 * To see the expected results, please refer to ./expected-data.json file in part1 directory!
 * NOTE: Please ensure that all the tests in part-1.spec.js are passing!
 */

module.exports = {
  task1,
  task2,
  task3,
  task4,
};
