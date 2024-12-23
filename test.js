const { findPairSum } = require('./findPairSum');

const testCases = [
    {
        input: { M: [2, 5, 8, 14, 0], N: 10 },
        expected: [2, 8],
        description: 'Basic case with solution'
    },
    {
        input: { M: [1, 2, 3], N: 10 },
        expected: null,
        description: 'No solution exists'
    },
    {
        input: { M: [1], N: 2 },
        expected: null,
        description: 'Array too small'
    },
    {
        input: { M: [-1, 2, 5, -3], N: -4 },
        expected: [-1, -3],
        description: 'Negative numbers'
    },
    {
        input: { M: [0, 0, 0], N: 0 },
        expected: [0, 0],
        description: 'Zero sum with zeros'
    },
    {
        input: { M: [10, 20, 10, 40, 50, 60, 70], N: 20 },
        expected: [10, 10],
        description: 'Duplicate numbers'
    },
    {
        input: { M: [1000000, 2000000, 3000000], N: 5000000 },
        expected: [2000000, 3000000],
        description: 'Large numbers'
    },
    {
        input: { M: ['1', 2, 3], N: 3 },
        expected: null,
        description: 'Invalid array with strings',
        shouldThrow: true
    }
];

const runTests = () => {
    testCases.forEach((test, index) => {
        try {
            const result = findPairSum(test.input.M, test.input.N);
            const passed = JSON.stringify(result) === JSON.stringify(test.expected);
            console.log(`Test ${index + 1} (${test.description}): ${passed ? '✅' : '❌'}`);
            if (!passed) {
                console.log(`Expected: ${test.expected}, Got: ${result}`);
            }
        } catch (error) {
            console.log(`Test ${index + 1} failed with error: ${error.message}`);
        }
    });
};

module.exports = { runTests };