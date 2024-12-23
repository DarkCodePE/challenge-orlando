// game-01/src/findPairSum.js

/**
 * Finds the first pair of numbers in an array that sum to a target value
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(n) - storing seen numbers in Set
 *
 * @param {number[]} M - Array of integers
 * @param {number} N - Target sum
 * @returns {number[]|null} Pair of numbers or null if no solution exists
 * @throws {Error} If invalid input types are provided
 */
const findPairSum = (M, N) => {
    if (!Array.isArray(M)) throw new Error('First argument must be an array');
    if (typeof N !== 'number') throw new Error('Second argument must be a number');
    if (M.length < 2) return null;

    const seen = new Set();

    for (const num of M) {
        if (typeof num !== 'number') {
            throw new Error('Array must contain only numbers');
        }

        const complement = N - num;
        if (seen.has(complement)) return [complement, num];
        seen.add(num);
    }

    return null;
};

module.exports = { findPairSum };