// Test file for advanced feature
const { advancedCalculation } = require('../src/advanced-feature');

describe('Advanced Feature Tests', () => {
    test('should handle division correctly', () => {
        expect(advancedCalculation(10, 2, 'divide')).toBe(5);
    });

    //divide by zero to make incident 
    test('should handle division by zero', () => {
        expect(() => advancedCalculation(10, 0, 'divide')).toThrow('Division by zero is not allowed');
    });

    test('should handle complex operations', () => {
        // This test will fail because complexVariable is undefined
        expect(() => advancedCalculation(5, 3, 'complex')).toThrow();
    });

    test('should handle unknown operations', () => {
        expect(() => advancedCalculation(5, 3, 'unknown')).toThrow();
    });
});
// const { advancedCalculation } = require('../src/advanced-feature');

// describe('Advanced Feature Tests', () => {
//     test('should handle division correctly', () => {
//         expect(advancedCalculation(10, 2, 'divide')).toBe(5);
//     });

//     test('should handle division by zero', () => {
//         // Only test this if the function is expected to throw
//         expect(() => advancedCalculation(10, 0, 'divide')).toThrow('Division by zero is not allowed');
//     });

//     test('should handle complex operations', () => {
//         // Provide a definition in the source for 'complex' or skip this test
//         const result = advancedCalculation(5, 3, 'complex');
//         expect(result).toBeDefined(); // adjust based on expected value
//     });

//     test('should handle unknown operations', () => {
//         // If unknown operations are now supported or default to a behavior, test accordingly
//         expect(() => advancedCalculation(5, 3, 'unknown')).toThrow('Unknown operation');
//     });
// });
