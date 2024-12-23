/**
 * @fileoverview Game-01: Find First Pair Sum Solution
 *
 * Problem:
 * Given a non-empty array M of integers and a target sum N,
 * find the first pair of numbers that sum to N.
 *
 * Example:
 * Input: M = [2, 5, 8, 14, 0], N = 10
 * Output: [2, 8]
 *
 * Complexity Analysis:
 * - Time Complexity: O(n) where n is the length of array M
 *   We only need to traverse the array once using a Set for O(1) lookups
 * - Space Complexity: O(n) to store the seen numbers in the Set
 *
 * @author Your Name
 * @version 1.0.0
 */

const { findPairSum } = require('./findPairSum');
const { runTests } = require('./test');

// Example usage
const numbers = [2, 5, 8, 14, 0];
const target = 10;
console.log(findPairSum(numbers, target));

// Run tests
runTests();

module.exports = findPairSum;